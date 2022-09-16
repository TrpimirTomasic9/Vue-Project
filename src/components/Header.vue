<template>
    <div>
        <nav class='navbar navbar-dark navbar-expand-lg bg-dark'>
            <div class='container-fluid'>
                <router-link class='navbar-brand' to='/'>CINEMA MON AMOUR</router-link>
                <button class='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse navbar-center' id='navbarSupportedContent'>
                    <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li class='nav-item' v-if="isUser">
                            <router-link to="" class="nav-link" id="activeuser">{{activeUser}}</router-link>
                        </li>
                        <li class='nav-item'>
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class='nav-item'>
                            <router-link to="/watchlist" class="nav-link">Watchlist</router-link>
                        </li>
                        <li class='nav-item'>
                            <router-link to="/favourites" class="nav-link">Favourites</router-link>
                        </li>
                        <li class='nav-item'>
                            <router-link to="/watched" class="nav-link">Watched</router-link>
                        </li>
                        <li class='nav-item'>
                            <router-link to="/aboutus" class="nav-link">About Us</router-link>
                        </li>
                        <li class='nav-item' v-if="isAdmin">
                            <router-link to="/dashboard" class="nav-link">Admin Dashboard</router-link>
                        </li>
                    </ul>
                    <div v-if="showLogin">
                        <!-- <button class='btn btn-outline-success' type='submit' @click='$store.commit("logout")'>
                            Logout
                        </button> -->
                        <button class='btn btn-outline-success' type='submit' @click='showModal = true'>
                            Login
                        </button>
                    </div>
                    <div v-if="!showLogin">
                        <button class='btn btn-outline-danger' @click="Logout()">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        <log-in v-if='showModal' @toggleModel='showModal = false' />
    </div>
</template>

<script>
import Login from './LoginModal.vue';
import VueCookies from 'vue-cookies'

var showLogin = true;
var isAdmin = false;
var isUser = false;

var email = VueCookies.get('email');
if (email != null) {
    showLogin = false;
    var category = VueCookies.get('category');
    if (category == "admin") {
        isAdmin = true;
    }
    if (category == "user") {
        isUser = true;
        
    }
} else {

    showLogin = true;
}

export default {
    components: {
        'log-in': Login
    },
    data() {
        return {
            showModal: false,
            logout: false,
            showLogin,
            isAdmin,
            isUser,
            activeUser: null
        }
    },
    mounted(){
        this.activeUser = VueCookies.get('firstname');
    },
    methods: {
        Logout() {
            VueCookies.remove('email');
            VueCookies.remove('password');
            VueCookies.remove('id');
            VueCookies.remove('firstname');
            VueCookies.remove('category');
            window.location.href = '/';
        }
    }
}
</script>

<style scoped>

nav {
    border-bottom: 3px solid #8c38ff;
    text-align: center;
}

.navbar-brand {
    color: #8c38ff;
    text-shadow: 3px 3px black;
}

.nav-link:hover {
    color: #8c38ff;
}

.nav-item {
    text-shadow: 2px 2px black;
}

button {
    text-shadow: 1px 1px black;
}

#activeuser{
    color: green;
    text-transform: uppercase;
}

</style>
