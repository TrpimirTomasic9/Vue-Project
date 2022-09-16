<template>
    <div class='modal'>
        <div class='modal-form xs-w-75'>
            <div class="mb-3">
                <form>
                    <center>
                        <button @click="$emit('closeModal');" class='classX'>x</button>
                        <h1 class='text-center'>Add User</h1>
                        <label>First Name:</label>
                        <input type="text" placeholder="Enter First Name" id="firstname">
                        <div class="input-message" v-if="firstnameError"><h6>{{firstnameError}}</h6></div>
                        <label>Last Name:</label>
                        <input type="text" placeholder="Enter Last Name" id="lastname">
                        <div class="input-message" v-if="lastnameError"><h6>{{lastnameError}}</h6></div>
                        <label>Email:</label>
                        <input type='email' placeholder="Enter Email" id="email">
                        <div class="input-message" v-if="emailError"><h6>{{emailError}}</h6></div>
                        <label>Password:</label>
                        <input type='password' placeholder="Enter Password" id="password">
                        <div class="input-message" v-if="passwordError"><h6>{{passwordError}}</h6></div>
                        <div class="submit mb-3">
                            <a id="addbtn" class="btn btn-light mt-3" @click="AddUser">Add</a>
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
        data() {
            return {
            users: [],
            email: null,
            password: null,
            emailError: null,
            passwordError: null,
            firstname: null,
            firstnameError: null,
            lastname: null,
            lastnameError: null,
            signupValidation : true
            }
        },
        methods: {
            async AddUser() {

            var firstname = document.getElementById('firstname').value;
            if (firstname.length == 0)
            {
                this.firstnameError = "Field is empty"
            }
            else
            {
                this.firstnameError = null
            }

            var lastname = document.getElementById('lastname').value;
            if (lastname.length == 0)
            {
                this.lastnameError = "Field is empty"
            }
            else
            {
                this.lastnameError = null
            }

            var email = document.getElementById('email').value;
            if(email.length == 0)
            {
                this.emailError = "Field is empty";
            }
            else 
            {
                this.emailError = null
            }

            try{
                const res = await axios.get(userURL);
                this.users = res.data;
            }
            catch(e){
                console.error(e);
            }
            
            for (var i = 0; i < this.users.length; i++)
            {
                if(this.users[i].email == document.getElementById('email').value)
                { 
                    this.signupValidation = false; 
                    this.emailError = "this email address is already in use!"
                    console.log(this.users[i].email);
                } 
            }
            var password = document.getElementById('password').value;
            if(password.length == 0)
            {
                this.passwordError = "Field is empty!";
            }
            else if(password.length>0 && password.length<8)
            { 
                this.passwordError = "Password is too short!"
            }
            else
            {
                this.passwordError = null
            }

            if(this.firstnameError == null && this.lastnameError == null && this.emailError == null && this.passwordError == null)
            {
            if(this.signupValidation == true)
                {
                    const res = await axios.post("http://localhost:3000/users", 
                    {
                        firstname: document.getElementById('firstname').value,
                        lastname: document.getElementById('lastname').value,
                        email: document.getElementById('email').value,
                        password: document.getElementById('password').value,
                        category: "user"
                    });
                this.users = [...this.users, res.data];
                window.location.href = '/dashboard';
                }
            }
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

#addbtn {
    border: 0;
    padding: 10px 20px;
    margin-top: 30px;
    color: black;
    border-radius: 20px;
    background-color: red;
    text-shadow: 1px 1px black;
}

#addbtn:hover {
    background-color: #198754;
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
    color: #198754;
    text-decoration: underline;
}

h1 {
    padding-top: 8%;
}

h6 {
    color: red;
}

</style>