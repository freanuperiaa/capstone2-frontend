<template>

    <div id="new-post">

        <h2>Create a Post</h2>
        <h3>Post Title:</h3>
        <input type="text" v-model="postTitle">

        <h3>Post Content:</h3>
        <input type="textarea" v-model="postContent">

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

    #new-post {
        width: 30%;
        margin: 0 auto;

        display: flex;
        flex-direction: column;

    }

    #new-post > input {
        margin: 10px 30px;
    }

    #new-post > button {
        width: 200px;
        margin: 50px auto;
    }

</style>