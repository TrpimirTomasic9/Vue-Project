<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery";

import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>
    <Navbar />
    <div class='body'>
        <RouterView />
    </div>
    <Footer />
</template>
<style scoped>
.body{
    background-image: url('./assets/images/background.jpg');
    background-size: cover;
    background-position: center;
    min-height: 80vh;
}
</style>
