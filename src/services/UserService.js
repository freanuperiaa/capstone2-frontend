import api from "./service.js";

export const UserService = {
    
    login(email, password) {
        const data = {
            email: email,
            password: password,
        }

        api.post('login', data)
            .then(data => {
                console.log(data);
            });
    },

    logout() {
        api.get('logout')
            .then(data => {
                console.log(data);
            });
    },

    getAllUsers() {
        api.get('users/')
            .then(data => {
                console.log(data);
            });
    },

    getCurrentUser() {
        api.get('users/me')
    }


}