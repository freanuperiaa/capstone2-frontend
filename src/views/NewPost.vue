<template>

    <div id="new-post">

        <h2>Create a Post</h2>

        <input type="text" v-model="postTitle">
        <input type="text" v-model="postContent">

        <button @click="submitPost">Submit Post</button>
    </div>

</template>

<script>
import api from "../services/service.js";

export default {
    name: "NewPost",
    components: {

    },
    data() {
        return {
            postTitle: "",
            postContent: "",
        }
    },
    methods: {
        submitPost() {
            // TODO: api call to submit post
            console.log(this.postTitle, this.postContent);
            const data = {
                title: this.postTitle,
                content: this.postContent
            }

            api.post("posts/", data)
                .then((response) => {
                    console.log(response);
                    alert("successfully created post!");
                    this.$router.push("/");
                })
                .catch(error => {
                    console.log(error)
                    alert("An error occurred. Please try again.")
                });
        }
    }
}
</script>

<style scoped>


</style>