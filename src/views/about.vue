<template>
    <div class='mid'>
        <div class='container'>
            <h1>Cinema mon Amour</h1>
            <h2 class="title">Who are we?</h2>
            <p class="text">We show you where you can legally watch movies and TV shows that you love. You are kept up to date with what is new on Netflix, Amazon Prime,
                Apple TV and many other streaming platforms. Our simple filter system allows you to see only what is important to you.
            </p>
            <p>
                We collect user profiles of millions of cinema goers and learn their individual movie taste.
                Cinema Mon Amour uses this data to run highly efficient trailer campaigns for movie studios, distributors and VOD services.
            </p>
            <br />
            <h2 class="title">What we do?</h2>

            <h3 class="subtitle">For our users</h3>
            <h4 class="subsubtitle">Apps for movie & TV show fans</h4>

            <p class="text">We show you where you can legally watch movies and TV shows that you love. You are kept up to date with what is new on Netflix, Amazon Prime, Apple TV and many other streaming platforms.
            </p>
            <p>
                Our simple filter system allows you to see only what is important to you.
                We also allow users to track their favorite shows and movies, and can notify you when a title is available on one of your services..
            </p>

            <h3 class="subtitle">For our clients</h3>
            <h4 class="subsubtitle">Next generation movie marketing</h4>

            <p class="text">We collect user profiles of millions of cinema goers and learn their individual movie taste. JustWatch uses this data to run highly efficient trailer campaigns for movie studios, distributors and VOD services.
            </p>
            <p>
                We retarget people on YouTube, Facebook and other platforms where they spend their time discovering new content. Our campaigns are twice as effective as the industry benchmarks.
            </p>
            <h3 class="subtitle">Some of our Clinets</h3>
            <div class="pictures">
                <img class="image" src="src/assets/images/sonypictures.png" alt="sony" style="width:70px">
                <img class="image" src="src/assets/images/paramount.jpg" alt="paramount" style="width:100px">
                <img class="image" src="src/assets/images/disney.png" alt="disney" style="width:100px">
                <img class="image" src="src/assets/images/universal.png" alt="universal" style="width:100px">
                <img class="image" src="src/assets/images/darkcastle.png" alt="darkcastle" style="width:100px">
                <img class="image" src="src/assets/images/columbia.png" alt="columbia" style="width:100px">
                <img class="image" src="src/assets/images/badrobot.png" alt="badrobot" style="width:100px">
                <img class="image" src="src/assets/images/Blumhouse.png" alt="blumhouse" style="width:100px">
                <img class="image" src="src/assets/images/JerryBruckheimer.png" alt="jerry" style="width:100px">
            </div>
        </div>
        <div class='container'>
            <div class='row'>
                <div class='col-md-6'>
                    <h5>Find us:</h5>
                    <address>
                        <u>CEO:</u> <a href="trpimir.tomasic009@gmail.com">Trpimir Tomašić</a><br>
                        <u>Visit us online at:</u> <a href="http://localhost:5173/">CinemaMonAmour.com</a> <br>
                        <u>Visit us in person at:</u> <br>
                        55 Central Park West <br>
                        Upper West Side, Manhattan, New York<br>
                        USA
                    </address>
                    <h5>Contact us : <a href="tel:+4733378901">914-405-0564</a></h5>
                </div>
                <div class='col-lg-6'>
                    <div class="mapouter">
                        <iframe width="100%" height="100%" src="https://maps.google.com/maps?q=55%20Central%20Park%20West&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>

<script>
export default {
    data(){
        return {
            center: {lat: 51.093048, lng: 6.842120},
        }
    }
}
</script>

<style scoped>

.mid {
    width: 70%;
    margin: auto;
    padding-top: 50px;
}

.mapouter {
    text-align: right;
    height: 100%;
    width: 100%;
}

h1 {
    color: #8c38ff;
    text-shadow: 2px 2px black;
    margin-top: -20px;
    margin-bottom: 10px;
    text-align: center;
}

h2 {
    color: #8c38ff;
    text-shadow: 2px 2px black;
    margin-top: -20px;
    margin-bottom: 10px;
}

.footer {
    padding: 20px;
}


.text {
    display: flex;
    justify-content: left;
    align-content: center;
    flex-direction: column;
}

p {
    color: whitesmoke;
}

address {
    color: whitesmoke;
}

a {
    color: #8c38ff;
}

.btn {
    color: red;
    text-shadow: 1px 1px black;
}

h5 {
    color: #8c38ff;
}

u {
    text-decoration-color: #8c38ff;
}

.container{
    background: #212529;
}

.subtitle {
    color: #8c38ff;
    text-shadow: 1px 1px black;
}

.subsubtitle {
    color:#8c38ff;
    text-shadow: 1px 1px black;
}

.pictures{
    text-align: center;
}

.image {
    margin-right: 3%;
    margin-bottom: 2%;
    margin-top: 2%;
}

</style>
