<template>
    <div id="friend">

        <div id="friend-content">
            <h2>Friend</h2>

            <h3>Name: {{ name }}</h3>
            <h4>Email: {{ email }} </h4>
            <h4> phone number: {{ phoneNumber }} </h4>
            <h4>user id: {{ userId }} </h4>
            <h4>friends: {{  friends }} </h4>

            <h3>Posts:</h3>
            <post 
                v-for="post in posts" :key="post._id" 
                :title="post.title"
                :content="post.content"
                :author="post.author"
                :date="post.date"
            />
        </div>

    </div>
</template>

<script>
import api from "../services/service.js";
import Post from "../components/Post.vue";

export default {
    name: "Friend",
    components: {
        Post
    },
    data() {
        return {
            name: "",
            phoneNumber: 0,
            email: "",
            friends: 0,
            userId: "some",
            posts: []
        }
    },
    methods: {
        retrieveFriendData() {
            api.get("users/" + this.userId)
                .then((response) => {
                    console.log(response);
                    return response.data;
                })
                .then(data => {
                this.name = data.firstName + " " + data.lastName;
                this.phoneNumber = data.mobileNo;
                this.email = data.email;
                this.friends = data.friends.length;
                })
                .catch((error) => {
                    console.log(error);
                    alert("An error occurred. Please try again.")
                })
        },

        retrieveFriendPosts() {
            api.get("posts/owned-by/" + this.userId)
                .then(response => response.data)
                .then(data => {
                    this.posts = data.posts
                })
        }
    },
    created() {
        this.userId = this.$route.params.id;
        this.retrieveFriendData();
        this.retrieveFriendPosts();
    }
}
</script>

<style scoped>

#friend-content {
    width: 40%;
    margin: 50px auto 0px;
}

</style>