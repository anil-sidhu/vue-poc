<template>
<div class="hello">
    <HeaderComponent />
    <br>
    <h1>Maps</h1>
    <GmapMap :center="{
                    lat: 28.4595,
                    lng: 77.0266
                }" :zoom="7" map-type-id="terrain" style="width: 600px; height: 400px">
        <GmapMarker :key="index" v-for="(m, index) in markers" :icon="{ url: require('../assets/mark.png'),  // scaled size
    }" :zoom="16" :position="{
                    lat: 28.4595,
                    lng: 77.0266
                }" :clickable="false" :draggable="false" @click="center=m.position" />

    </GmapMap>
</div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
import facebookLogin from 'facebook-login-vuejs';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDPnu2gliYe2mt5ZC5oX-J5JT6C9qhAO2c',
        libraries: 'places', // This is required if you use the Autocomplete plugin
    },

})
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: {
        HeaderComponent,
        facebookLogin
    },
    data: function () {
        return {
            markers: {
                lat: 28.4595,
                lng: 77.0266
            }
        }
    },
    mounted() {
        // At this point, the child GmapMap has been mounted, but
        // its map has not been initialized.
        // Therefore we need to write mapRef.$mapPromise.then(() => ...)

        // this.$refs.mapRef.$mapPromise.then((map) => {
        //     map.panTo({
        //         lat: 1.38,
        //         lng: 103.80
        //     })
        // })
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}
</style>
