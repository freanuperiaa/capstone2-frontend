<template>
    
    <div id="add-friend">
        <h2>Add friend</h2>

        <div>
            <h4>Enter friend id:</h4>
            <input type="text" id="friend-id" v-model="friendId">
        </div>

        <button @click="addFriend">Add Friend</button>
    </div>

</template>

<script>
import api from "../services/service.js";

export default {
    name: "AddFriend",
    data() {
        return {
            friendId: "",
        }
    },
    methods: {
        addFriend() {
            const data = {
                userId: this.friendId
            }

            api.post("users/add-friend", data)
                .then((data) => {
                    console.log(data);
                    alert(`added friend with user id ${this.friendId}`);
                    this.$router.push("/");
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>