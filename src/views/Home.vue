<template>
  <div class="home">
    <h1>Welcome to Home Page!</h1>

    <button @click="clickMe">Click me!</button>
  </div>
</template>

<script>
import {UserService} from "../services/UserService.js";

export default {
  name: 'home',
  components: {
  },
  methods: {
    async clickMe() {
        UserService.getAllUsers();
        
    }
  }
}
</script>