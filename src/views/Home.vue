<template>
  <div class="home">
    <h1>Welcome to Home Page!</h1>

    <button @click="clickMe">Click me!</button>
    <button @click="logout">Logout</button>
    
    <button @click="goToProfile">My Profile</button>

    <button @click="goToMakePost">Add a new Post</button>

    <my-story/>
  </div>
</template>

<script>
import {mapActions} from "vuex";

import {UserService} from "../services/UserService.js";
import MyStory from "../components/HomeMyStory.vue";

export default {
  name: 'home',
  components: {
    MyStory
  },
  methods: {

    async clickMe() {
        UserService.getAllUsers();
        
    }
    ,
    async logout() {
      UserService.logout();
      this.logoutUser();
      this.$router.push("/login");
    }
    ,
    goToProfile(){
      this.$router.push("/profile")
    },

    goToMakePost() {
      this.$router.push("/new-post");
    },
    ...mapActions(['logoutUser'])
  }
}
</script>