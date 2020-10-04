<template>
    <div id="login">
        <div class="input-group">
            <label>Username</label>
            <input type="text" v-model="email">
        </div>       
        
        <div class="input-group">
            <label>Password</label>
            <input type="password" v-model="password">
        </div>
        
        <button type="button" v-on:click="login">Login</button>
        <button @click="register">Register</button>
    </div>
</template>

<script>
import { UserService } from '../services/UserService.js';

import {mapActions} from "vuex";

export default {
    name: 'login',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {

        async login() {

            await UserService.login(this.email, this.password);
            console.log("finished logging in");
            await this.loginUser();
            this.$router.push("/");
            
        },

        register() {
            this.$router.push("/register")
        },

        ...mapActions(['loginUser']),
    }
}
</script>

<style>

    #login {
        margin-top: 250px;
    }

    .input-group {
        margin: 1rem;
    }

    .input-group label {
        margin-right: 0.5rem;
    }
</style>