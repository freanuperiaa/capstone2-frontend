<template>

    <div id="profile">
        <h2>My Profile</h2>

        <h2> {{ name }} </h2>
        <h3> {{ email }} </h3>
        <h3> Phone Number: {{ phoneNumber }} </h3>
        <h4>id: {{ userId }}</h4>
        <h4>Friends: </h4>
        <div class="friend-item" v-for="friend in friends" :key="friend">
            <h5 @click="goToFriend(friend)">{{ friend }}</h5>
        </div>

        <button @click="deactivateAccount">Deactivate Account</button>
    </div>

</template>

<script>
import api from "../services/service.js";

export default {
    name: "Profile",
    components: {

    },
    data() {
        return {
            name: "",
            phoneNumber: 0,
            email: "",
            friends: [],
            userId: "some"
        }
    },
    methods: {
        deactivateAccount() {
            const sure = confirm("Are you sure you want to delete your account?");
            if (sure) {
                // TODO: api call to deactivate account
                console.log("deleting account...")
            }
        },

        retrieveUserInfo() {
            api.get("users/me")
            .then(response => response.data[0])
            .then(data => {
                console.log(data);
                this.name = data.firstName + " " + data.lastName,
                this.phoneNumber = data.mobileNo,
                this.email = data.email,
                this.friends = data.friends,
                this.userId = data._id
            })
        },

        goToFriend(friendId) {
            console.log("!!!!!!!!!", friendId);
            this.$router.push("/friend/" + friendId);
        }
    },

    created() {
        this.retrieveUserInfo();
    }
}
</script>

<style scoped>

#profile {
    width: 40%;
    margin: 50px auto 0px;
    border-radius: 30px;
    border: 1px solid black;
    padding: 50px;
}

</style>