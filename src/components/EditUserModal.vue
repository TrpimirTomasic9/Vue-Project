<template>
    <div class='modal'>
        <div class='modal-form xs-w-75'>
            <div class="mb-3">
                <form>
                    <center>
                        <button @click="$emit('closeModal');" class='classX'>X</button>
                        <h1 class='text-center'>Edit User</h1>
                        <label>First Name:</label>
                        <input type="text" placeholder="Enter First Name" id="firstname">
                        <label>Last Name:</label>
                        <input type="text" placeholder="Enter Last Name" id="lastname">
                        <label>Email:</label>
                        <input type='email' placeholder="Enter Email" id="email">
                        <label>Password:</label>
                        <input type='password' placeholder="Enter Password" id="password">
                        <div v-if="passwordError" class="error">{{ passwordError }}</div>
                        <div class="submit mb-3">
                            <a class="btn btn-light mt-3" @click="EditUser(id)">Update</a>
                        </div>
                    </center>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
var baseURL = 'http://localhost:3000/'
var userURL = baseURL + "users";

export default {
    props: ['userid'],
    data() {
        return {

            name: '',
            lastname: '',
            email: '',
            password: '',
            passwordError: ''

        }
    },
    methods: {
        async EditUser() {
            await axios.put("http://localhost:3000/users/" + this.userid, {
                firstname: document.getElementById('firstname').value,
                lastname: document.getElementById('lastname').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                category: "user"
            });
            window.location.href = './dashboard';
        }
    }
}
</script> 

<style scoped>

label,input {
    display: block;
    margin-bottom: 1px;
}

.input {
    border: 1px solid black;
}

@media (max-width: 768px) {
    .modal-form {
        width: 80%;
    }
}

.modal {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-form {
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    transform: translate(-50%, -50%);
    padding: 0;
    justify-content: center;
    align-items: center;
}

form {
    background: #343a40;
    text-align: left;
    border-radius: 10px;
    border: 4px solid #8c38ff;
    padding-bottom: 5%;
}

label {
    color: whitesmoke;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    text-shadow: 1px 1px black;
}

button {
    border: 0;
    padding: 10px 20px;
    margin-top: 30px;
    color: black;
    border-radius: 20px;
    background-color: red;
    text-shadow: 1px 1px black;
}

.submit {
    text-align: center;
}

.submit button.is-active,
.submit button:hover {
    background-color: #198754;
}

.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}

h1 {
    font-size: 2.3em;
    font-weight: bold;
    color: #8c38ff;
    text-shadow: 3px 3px black;
    padding-top: 8%;
}

.close {
    color: whitesmoke;
    font-weight: bold;
    margin-left: 85%;
    padding-top: 0;
    margin-top: 1%;
    background: none;
}

.xs-w-75 {
    width: 100vh;
}

.mb-3 {
    width: 40%;
    height: 100%;
}

.form-select {
    width: 38%;
}


</style>