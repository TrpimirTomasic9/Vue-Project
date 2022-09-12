<template>
    <br />
    <div class="pagetitle">
        <h1 class="text-center">My Favourite movies</h1>
    </div>
    <div class="container">
        <div v-for='movie in movies' :key='movie.id'>
            <div class="card mb-4 mr-2 ml-2" v-if="movie.favourite == 'yes'">
                <div class="card-horizontal">
                    <div class="view overlay">
                        <img class="card-img-top" v-bind:src='movie.image' :alt='movie.title'>
                        <a href="#" target="_blank">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div class="card-body center mt-0">
                        <button @click="removeCard(movie.id)" class='removebtn fab'>Remove</button>
                        <h3 class="card-title mb-3"><a style="font-weight:bold">{{movie.title}}</a></h3>
                        <h5 class="card-subtitle mb-2 text-muted">{{movie.details}}</h5>
                        <p class="card-text">{{movie.description}}</p>
                        <h6 class="ratepar">Rate this movie</h6>
                        <div class="star_rating">
                            <button class="star">&#9734;</button>
                            <button class="star">&#9734;</button>
                            <button class="star">&#9734;</button>
                            <button class="star">&#9734;</button>
                            <button class="star">&#9734;</button>
                        </div>
                        <h6 class="ratepar">
                            My rate for this movie is :&nbsp;
                            <p class="ratenum"> 5/5</p>
                        </h6>
                        <div class="btn-group">
                            <button class="btn mr-3"><i class="fab">Watch Now</i></button>
                            <button class="btn mr-3" @click="addToWatchlist(movie.id)"><i class="fab">Watchlist</i></button>
                            <button class="btn mr-3" @click="addToWatched(movie.id)"><i class="fab">Watched</i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h1 v-if="counter == 0" class="text-center">You have no movies in your favourites</h1>
    <br>
</template>

<script>
import axios from 'axios';
var baseURL = 'http://localhost:3000/'

export default {
    data() {
        return {
            movies: [],
            counter: 0
        }
    },
    async mounted() {
        try {
            const res = await axios.get(baseURL + 'movies');
            this.movies = res.data;
        } catch (e) {
            console.error(e)
        }
        for (var i = 0; i < this.movies.length; i++) {
            if (this.movies[i].favourite == 'yes') {
                this.counter++
            }
        }

    },
    methods: {
        async removeCard(index) {
            await axios.put(baseURL + 'movies/' + index, {
                id: index,
                title: this.movies[index - 1].title,
                details: this.movies[index - 1].details,
                description: this.movies[index - 1].description,
                image: this.movies[index - 1].image,
                watchlist: this.movies[index - 1].watchlist,
                favourite: "no",
                watched: this.movies[index - 1].watched
            });
            try {
                const res = await axios.get(baseURL + 'movies');
                this.movies = res.data;
            } catch (e) {
                console.error(e)
            }
            for (var i = 0; i < this.movies.length; i++) {
                if (this.movies[i].favourite == 'yes') {
                    this.counter++
                }
            }
        },
        async addToWatched(index) {
            await axios.put(baseURL + 'movies/' + index, {
                id: index,
                title: this.movies[index - 1].title,
                details: this.movies[index - 1].details,
                description: this.movies[index - 1].description,
                image: this.movies[index - 1].image,
                watchlist: this.movies[index - 1].watchlist,
                favourite: this.movies[index - 1].favourite,
                watched: "yes"
            });
            try {
                const res = await axios.get(baseURL + 'movies');
                this.movies = res.data;
            } catch (e) {
                console.error(e)
            }
        },
        async addToWatchlist(index) {
            await axios.put(baseURL + 'movies/' + index, {
                id: index,
                title: this.movies[index - 1].title,
                details: this.movies[index - 1].details,
                description: this.movies[index - 1].description,
                image: this.movies[index - 1].image,
                watchlist: "yes",
                favourite: this.movies[index - 1].favourite,
                watched: this.movies[index - 1].watched,
            });
            try {
                const res = await axios.get(baseURL + 'movies');
                this.movies = res.data;
            } catch (e) {
                console.error(e)
            }
        }
    }
}
</script>

<style scoped>

.center {
    margin: auto;
    align-items: center;
    text-align: left;
}

.card-horizontal {
    display: flex;
    flex: 1 1 auto;
    background-color: #343a40;
    border: 4px solid #8c38ff;

}

.card {
    width: 100%;
}

.scroll-cards-height {
    position: relative;
    overflow-y: scroll;
    height: 600px;
    background-color: #343a40;
    border: 4px solid #8c38ff;
}

.card-img-top {
    /* width: 100%; */
    width: 300px;
    height: 100%;
    object-fit: cover;
}

.card-title {
    color: #8c38ff;
    text-shadow: 2px 2px black;
}

p {
    color: whitesmoke;
    text-shadow: 1px 1px black;
}

h1 {
    padding-bottom: 16px;
    margin-top: -15px;
    color: #8c38ff;
    text-shadow: 3px 3px black;
    align-items: center;
}

h5 {
    text-shadow: 1px 1px black;
}

h6 {
    color: #8c38ff;
    text-shadow: 2px 2px black;
    margin: 0px 0px 0px;
    margin-top: 5px;
}

.star {
    background: none;
    border: none;
    color: yellow;
    font-size: 50px;
    text-shadow: 2px 2px black;
}

.star_rating {
    text-align: left;
}
.removebtn {
    border: none;
    background: none;
    color: red;
    float: right;
}

.btn-group {
    padding-top: 5px;
}

.btn {
    color: red;
    text-shadow: 1px 1px black;
    padding: 2px 2px;
    margin-right: 20px;
    font-size: 20px;
    height: 50px;
}

.ratenum {
    color: yellow;
    display: inline-block;
    text-shadow: 1px 1px black;
}

.mb-4 {
    background-color: #8c38ff;
}


@media (max-width: 992px) {
    .card-horizontal {
        flex-direction: column;
    }
 }

</style>
    