<template>

    <div id="register">
        <h2>Register a new account!</h2>

        <div class="form">
            
            <input type="text" v-model="firstName" placeholder="first name">
            <input type="text" v-model="lastName" placeholder="last name">
            <input type="email" v-model="email" placeholder="email">
            <input type="password" v-model="password" placeholder="password">
            <input type="text" v-model="mobileNo" placeholder="mobile number">
            <div>
                <input type="checkbox" v-model="isAdmin">
                <span>is admin?</span>
            </div>
            <h3>enrollment</h3>
            <input type="text" v-model="singleCourseId" placeholder="course id">
            <input type="text" v-model="singleCourseStatus" placeholder="course status">

            <button @click="register()">Register</button>
        </div>
    </div>

</template>

<script>
import api from "../services/service.js";

export default {
    name: "Register",
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            mobileNo: "",
            isAdmin: false,
            enrollments: [],
            numberOfEnrollments: ['something'],
            singleCourseId: "",
            singleCourseStatus: "",
        }
    },
    methods: {
        addMoreEnrollment() {
            this.numberOfEnrollments.push(new Date() + " ")
        },

        register() {
            let data = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email, 
                password: this.password,
                mobileNo: this.mobileNo,
                isAdmin: this.isAdmin,
                enrollments: [
                    {
                        courseId: this.singleCourseId,
                        status: this.singleCourseStatus
                    }
                ]
            };
            console.log(data);

            api.post("register", data)
                .then(response => {
                    console.log(response);
                    alert(`created user ${this.firstName} ${this.lastName}`)
                })
                .then(some => {
                    console.log(some)
                    this.$router.push("login")
                })
        }
    }
}
</script>

<style scoped>

    .form {
        width: 50%;
        margin: 0 auto;

        display: flex;
        flex-direction: column;

    }

    .add-enrollment {
        width: 40%;
        margin: 0 auto;
    }


</style>