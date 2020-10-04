<template>
    <div id="my-story">
        <h3>Your Story so far...</h3>
        <post 
            v-for="post in posts" :key="post._id" 
            :title="post.title"
            :content="post.content"
            :author="post.author"
            :date="post.date"
        />
    </div>

</template>

<script>
import Post from "./Post.vue";
import api from "../services/service.js";

export default {
    name: "MyStory",
    components: {
        Post
    },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        retrieveCurrentUserPosts() {
            api.get("posts/my-posts")
            .then(response => {
                this.posts = response.data.posts;
                console.log(this.posts);
            })
        }
    },
    created() {
        this.retrieveCurrentUserPosts();
    }

}
</script>

<style scoped>

</style>