<template>
    <div class="hello">
        <HeaderComponent />
        <br>
        <h1>Maps</h1>

        <facebook-login class="button" appId="2175298476045913" @login="onLogin" @logout="onLogout" @sdk-loaded="sdkLoaded">
        </facebook-login>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'

import Vue from 'vue'
import facebookLogin from 'facebook-login-vuejs';

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            idImage, loginImage, mailImage, faceImage,
            isConnected: false,
            name: '',
            email: '',
            personalID: '',
            FB: undefined
        }
    },
    components: {
        HeaderComponent,
        facebookLogin
    },
    methods: {
        getUserData() {
            console.warn("jack")
            this.FB.api('/me', 'GET', { fields: 'id,name,email' },
                userInformation => {
                    console.warn("jack", userInformation)
                    this.personalID = userInformation.id;
                    this.email = userInformation.email;
                    this.name = userInformation.name;
                }
            )
        },
        sdkLoaded(payload) {
            this.isConnected = payload.isConnected
            this.FB = payload.FB
            if (this.isConnected) this.getUserData()
        },
        onLogin() {
            this.isConnected = true
            this.getUserData()
        },
        onLogout() {
            this.isConnected = false;
        }
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
