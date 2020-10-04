<template>

    <div id="profile">
        <h2>My Profile</h2>

        <h2> {{ name }} </h2>
        <h3> {{ email }} </h3>
        <h3> Phone Number: {{ phoneNumber }} </h3>
        <h4>id: {{ userId }}</h4>
        <h4>Friends: {{ friends }}</h4>

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
            friends: 0,
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
                this.friends = data.friends.length,
                this.userId = data._id
            })
        }
    },

    created() {
        this.retrieveUserInfo();
    }
}
</script>

<style scoped>

</style>