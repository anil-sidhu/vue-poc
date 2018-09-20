<template>
<div class="hello">
    <HeaderComponent />
    <br>
    <br>
    <br>
    <h1>Login Screen</h1>

    <b-row class="justify-content-md-center">
        <b-col sm="2">
            <b-form-group>
                <b-form-input v-model="name" type="text" placeholder="Enter your name"></b-form-input>
            </b-form-group>
        </b-col>
        <b-col sm="2">
            <b-form-group>
                <b-form-input v-model="password" type="password" placeholder="Enter your name"></b-form-input>
            </b-form-group>
        </b-col>
        <b-col sm="1">
            <b-button v-on:click="submit">
                Login
            </b-button>

        </b-col>
    </b-row>
    <p>{{name}}</p>

</div>
</template>

<script>
const axios = require('axios');
import Vue from 'vue'
import GoogleAuth from 'vue-google-oauth'

Vue.use(GoogleAuth, {
    client_id: '1051219410701-lrgfvs1rl932nc2g6pm5ban8avrq25he.apps.googleusercontent.com'
})
Vue.googleAuth().load()

import HeaderComponent from './HeaderComponent.vue'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: {
        HeaderComponent,
    },
    data: function () {
        return {
            result: "test",
            password: "",
            name: "",

        }
    },
    methods: {
        submit() {
            console.warn("name", this.name, this.password)

            // Just add in this line
            Vue.googleAuth().directAccess()

            Vue.googleAuth().signIn(function (googleUser) {
                // things to do when sign-in succeeds
                console.warn("googleUser",googleUser.w3.U3)
            }, function (error) {
                console.warn("googleUser error",error)
            })

            // axios.get('http://localhost:3004/user/7')
            //     .then((response) => {
            //         // handle success

            //         if (response.status == 200) {
            //             console.warn("response inside", response.status)

            //         }
            //     })
            //     .catch(function(error) {
            //         // handle error
            //         this.items.data = "Some issue "
            //     })
        },

    },

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

.g-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #3c82f7;
    color: #fff;
    box-shadow: 0 3px 0 #0f69ff;
}
</style>
