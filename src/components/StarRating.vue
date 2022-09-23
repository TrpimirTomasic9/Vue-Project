<template>
<center>
<div class="container">
    <h6>Rate this movie</h6>
    <ol>
        <li><a href="#" id="btn1" class="star1" @click="stars1();"><span class="fas fa-star"></span></a></li>
        <li><a href="#" id="btn2" class="star2" @click="stars2();"><span class="fas fa-star"></span></a></li>
        <li><a href="#" id="btn3" class="star3" @click="stars3();"><span class="fas fa-star"></span></a></li>
        <li><a href="#" id="btn4" class="star4" @click="stars4();"><span class="fas fa-star"></span></a></li>
        <li><a href="#" id="btn5" class="star5" @click="stars5();"><span class="fas fa-star"></span></a></li>
    </ol>
    <div class="msg">
        <p class="p1">Your give 1 star rating</p>
        <p class="p2">Your give 2 stars rating</p>
        <p class="p3">Your give 3 stars rating</p>
        <p class="p4">Your give 4 stars rating</p>
        <p class="p5">Your give 5 stars rating</p>
    </div>
</div>
</center>
</template>

<script>

import axios from 'axios'
import VueCookies from 'vue-cookies'


export default{
    methods: {
        stars1()
        {
            const p1 = document.querySelector(".p1");
            const p2 = document.querySelector(".p2");
            const p3 = document.querySelector(".p3");
            const p4 = document.querySelector(".p4");
            const p5 = document.querySelector(".p5");

            const star1 = document.querySelector(".star1");
            const star2 = document.querySelector(".star2");
            const star3 = document.querySelector(".star3");
            const star4 = document.querySelector(".star4");
            const star5 = document.querySelector(".star5");

            star1.style.color = "#ffe400";
            star2.style.color = "#b6b6b6";
            star3.style.color = "#b6b6b6";
            star4.style.color = "#b6b6b6";
            star5.style.color = "#b6b6b6";

            p1.style.display = "block";
            p1.style.color = "red";
            p2.style.display = "none";
            p3.style.display = "none";
            p4.style.display = "none";
            p5.style.display = "none";

           this.$emit('rating', 1)
        },
        stars2()
        {
            const p1 = document.querySelector(".p1");
            const p2 = document.querySelector(".p2");
            const p3 = document.querySelector(".p3");
            const p4 = document.querySelector(".p4");
            const p5 = document.querySelector(".p5");

            const star1 = document.querySelector(".star1");
            const star2 = document.querySelector(".star2");
            const star3 = document.querySelector(".star3");
            const star4 = document.querySelector(".star4");
            const star5 = document.querySelector(".star5");

            star1.style.color = "#ffe400";
            star2.style.color = "#ffe400";
            star3.style.color = "#b6b6b6";
            star4.style.color = "#b6b6b6";
            star5.style.color = "#b6b6b6";

            p2.style.display = "block";
            p2.style.color = "orange";
            p1.style.display = "none";
            p3.style.display = "none";
            p4.style.display = "none";
            p5.style.display = "none";

            this.$emit('rating', 2)
        },
        stars3()
        {
            const p1 = document.querySelector(".p1");
            const p2 = document.querySelector(".p2");
            const p3 = document.querySelector(".p3");
            const p4 = document.querySelector(".p4");
            const p5 = document.querySelector(".p5");

            const star1 = document.querySelector(".star1");
            const star2 = document.querySelector(".star2");
            const star3 = document.querySelector(".star3");
            const star4 = document.querySelector(".star4");
            const star5 = document.querySelector(".star5");

            star1.style.color = "#ffe400";
            star2.style.color = "#ffe400";
            star3.style.color = "#ffe400";
            star4.style.color = "#b6b6b6";
            star5.style.color = "#b6b6b6";

            p3.style.display = "block";
            p3.style.color = "yellow";
            p1.style.display = "none";
            p2.style.display = "none";
            p4.style.display = "none";
            p5.style.display = "none";
  
            this.$emit('rating', 3)
        },
        stars4()
        {
            const p1 = document.querySelector(".p1");
            const p2 = document.querySelector(".p2");
            const p3 = document.querySelector(".p3");
            const p4 = document.querySelector(".p4");
            const p5 = document.querySelector(".p5");

            const star1 = document.querySelector(".star1");
            const star2 = document.querySelector(".star2");
            const star3 = document.querySelector(".star3");
            const star4 = document.querySelector(".star4");
            const star5 = document.querySelector(".star5");

            star1.style.color = "#ffe400";
            star2.style.color = "#ffe400";
            star3.style.color = "#ffe400";
            star4.style.color = "#ffe400";
            star5.style.color = "#b6b6b6";

            p4.style.display = "block";
            p4.style.color = "#c0ff00";
            p1.style.display = "none";
            p2.style.display = "none";
            p3.style.display = "none";
            p5.style.display = "none";

            this.$emit('rating', 4)
        },
        stars5()
        {
            const p1 = document.querySelector(".p1");
            const p2 = document.querySelector(".p2");
            const p3 = document.querySelector(".p3");
            const p4 = document.querySelector(".p4");
            const p5 = document.querySelector(".p5");

            const star1 = document.querySelector(".star1");
            const star2 = document.querySelector(".star2");
            const star3 = document.querySelector(".star3");
            const star4 = document.querySelector(".star4");
            const star5 = document.querySelector(".star5");

            star1.style.color = "#ffe400";
            star2.style.color = "#ffe400";
            star3.style.color = "#ffe400";
            star4.style.color = "#ffe400";
            star5.style.color = "#ffe400";

            p5.style.display = "block";
            p5.style.color = "#0cfc1c";
            p1.style.display = "none";
            p2.style.display = "none";
            p3.style.display = "none";
            p4.style.display = "none";

            this.$emit('rating', 5)
        }
    }
}
</script>

<style scoped>

.container{
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background: #343a40;
    width: 50%;
    height: 90%;
    padding: 90px 0;
}

.container:hover{
    opacity: 1;
}

h6{
    color: #8c38ff;
    font-family: sans-serif;
    position: absolute;
    top: 15%;
    text-transform: capitalize;
    font-size: 20px;
    text-shadow: 2px 2px black;
}

ol{
    display: flex;
    list-style: none;
    position: absolute;
    padding: 0px 0;
}

ol li {
    margin: 0 15px;
}
li a{
    font-size: 30px;
    color: #b6b6b6;
    text-shadow: 2px 2px black;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.msg{
    position: absolute;
    width: 100%;
    text-align: center;
    top:75%
}

.msg p{
    top: 400%;
    display: none;
    font-size: 20px;
    font-family: sans-serif;
    text-transform: capitalize;
    text-shadow: 2px 2px black;
}

</style>