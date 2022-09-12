<template>
    <div class='modal'>
        <div class='modal-form xs-w-75'>
            <div v-if='login' class="mb-3">
                <form @submit.prevent="loginSubmit">
                    <center>
                        <button type="button" class="close" @click="$emit('toggleModel');">x</button>
                        <h1 class='text-center'>Login</h1>
                        <label>Email</label>
                        <input type='email' required id='email' placeholder="Enter Email" />
                        <label>Password</label>
                        <input type='password' required id='password' placeholder="Enter Password" />
                        <div v-if="passwordError" class="error">{{ passwordError }}</div>
                        <div class="submit mb-3">
                            <button class="btn btn-light mt-3">LogIn</button>
                        </div>
                        <p class="switch-p">Not a member? <a @click='login =  false'>
                                <p class="switch-p colored"> Sign-up now</p>
                            </a></p>
                    </center>
                </form>
            </div>
            <div v-else class="mb-3">
                <form @submit.prevent="signupSubmit">
                    <center>
                        <button type="button" class="close" @click="$emit('toggleModel');">x</button>
                        <h1 class='text-center'>Register</h1>
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
                            <button class="btn btn-light mt-3">Sign-up</button>
                        </div>
                        <p class="switch-p">Not a member? <a @click='signup =  true'>
                                <p class="switch-p colored"> Log-in now</p>
                            </a></p>
                    </center>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import VueCookies from 'vue-cookies'
import axios from 'axios';
var baseURL = 'http://localhost:3000/'
var userURL = baseURL + "users";

export default {
    data() {
        return {
            email: '',
            password: '',
            passwordError: '',
            login: true,
            signup: true,
            name: '',
            lastname: '',
            passwordError: '',
        }
    },
    methods: {
        async loginSubmit() {
            console.log('email: ', document.getElementById('email').value);
            console.log('password: ', document.getElementById('password').value);

            const res = await axios.get(userURL);
            this.users = res.data;

            for (var i = 0; i < this.users.length; i++) {
                if (this.users[i].email == document.getElementById('email').value) {
                    if (this.users[i].password == document.getElementById('password').value) {
                        VueCookies.set('email', document.getElementById('email').value, "60min");
                        VueCookies.set('password', document.getElementById('password').value, "60min");
                        VueCookies.set('category', this.users[i].category, "60min");

                        if (this.users[i].category == "user") {
                            window.location.href = '/';
                        } else if (this.users[i].category == "admin") {
                            window.location.href = '/dashboard';
                        }
                    }
                }
            }
        },
        async signupSubmit() {
            const res = await axios.post("http://localhost:3000/users", {
                firstname: document.getElementById('firstname').value,
                lastname: document.getElementById('lastname').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                category: "user"
            });
            window.location.href = '/';
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
    /* margin: 30px auto; */
    background: #343a40;
    text-align: left;
    border-radius: 10px;
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
    background-color: #00ff00;
}

.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}

p {
    text-align: center;
    padding-top: 2em;
    color: grey;
}

h1 {
    font-size: 2.3em;
    font-weight: bold;
    color: #8c38ff;
    text-shadow: 3px 3px black;
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

form {
    border: 4px solid #8c38ff;
    padding-bottom: 5%;
}

.submit {
    margin-top: 5%;
}

.switch-p {
    margin-top: -6%;
    color: whitesmoke;
    display: inline;
    text-shadow: 1px 1px black;
}

.colored:hover {
    color: #00ff00;
    text-decoration: underline;
}

h1 {
    padding-top: 8%;
}

</style>
