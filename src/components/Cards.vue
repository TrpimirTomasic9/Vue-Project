<template>
    <div class='container'>
        <br />
        <div class='row wrapper'>
            <div class='col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-4' v-for='movie in movies' :key='movie.id'>
                <div class='card h-100'>
                    <div class='card-header h-50 d-flex align-items-center justify-content-center' @click='item = movie'>
                        <img v-bind:src='movie.image' :alt='movie.title' class='card-img-top' />
                    </div>
                    <div class='card-body h-50'>
                        <div @click='item = movie'>
                            <h5 class='card-title'>{{movie.title}}</h5>
                            <h6 class='card-subtitle'>{{movie.details}}</h6>
                            <p class='card-text mt-2'>{{movie.description}}</p>
                        </div>
                        <center class="mt-auto">
                            <a href='#' class='btn mr-2' @click="addToFavourites(movie.id)">Favourites</a>
                            <a href='#' class='btn mr-2' @click="addToWatchlist(movie.id)">Watchlist</a>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        <br />

        <card-modal v-if='item' :item='item' @closeModal='item = null'/>
    </div>
</template>

<script>
import CardModal from './CardModal.vue';
import axios from 'axios';
import VueCookies from 'vue-cookies'

var baseURL = 'http://localhost:3000/'

export default {
    components: {
        'card-modal': CardModal
    },
    data() {
        return {
            item: null,
            userid: null,
            movies: []
        }
    },
    async mounted() {
        this.userid = $cookies.get('id')
        try {
            const res = await axios.get(baseURL + 'movies');
            this.movies = res.data;
        } catch (e) {
            console.error(e)
        }
    },
    methods: {
        async addToWatchlist(movieid) {
            var {data: movies} = await axios.get(baseURL + "user-movies-watchlist");
            console.log(movies)
            var body = {
                        userid: this.userid,
                        movieid: movieid,
                        watchlist: true
                    }

            var id = null;

            movies.forEach(element => {
                if(element.userid === this.userid && element.movieid === movieid){
                    id = element.id;
                }
                
            });
            if(id){
                await axios.delete(baseURL + "user-movies-watchlist/" + id)
            }
            
            await axios.post(baseURL + "user-movies-watchlist", body)

        },
        async addToFavourites(movieid) {
            var {data: movies} = await axios.get(baseURL + "user-movies-favourites");
            console.log(movies)

            var body = {
                        userid: this.userid,
                        movieid: movieid,
                        favourite: true
                        
                    }

            var id = null;

            movies.forEach(element => {
                if(element.userid === this.userid && element.movieid === movieid){
                    id = element.id;
                }
                
            });
            if(id){
                await axios.delete(baseURL + "user-movies-favourites/" + id)
            }
            
            await axios.post(baseURL + "user-movies-favourites", body)

        }
    }
}
</script>

<style scoped>

.card-text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: whitesmoke;
    text-shadow: 1px 1px black;
}

.wrapper {
    padding: 1px;
    box-sizing: border-box;
}

.card-header {
    padding: 0;
}

.card-img-top {
    width: 100%;
    height: 30vw;
    object-fit: cover;
}

.card-title {
    color: #8c38ff;
    text-shadow: 2px 2px black;
}

.card-subtitle {
    color: #6c757d;
    text-shadow: 1px 1px black;
}

.btn {
    color: red;
    text-shadow: 1px 1px black;
}

.btn:hover {
    color: #198754;
}

.card {
    display: table;
    clear: both;
    color: #000;
    background-color: #343a40;
}

/* @media (min-height: 400px) {
    .card-img-top {
        height: 30vw;
    }
    .card-body {
        height: 10vh !important;
        display: flex;
        flex-direction: column;
    }
}
 */
@media (max-width: 575.98px) {
    .card-img-top {
        height: 130vw;
    }
}

@media (min-width: 576px) {
    .card-img-top {
        height: 130vw;
    }
}

@media (min-width: 768px) {
    .card-img-top {
        height: 60vw;
    }
}

@media (min-width: 992px) {
    .card-img-top {
        height: 40vw;
    }
}

@media (min-width: 1200px) {
    .card-img-top {
        height: 30vw;
    }

    .card-body {
        height: 37vh !important;
        display: flex;
        flex-direction: column;
    }
}

@media (min-width: 1400px) {
    .card-img-top {
        height: 18vw;
    }

    .card-body {
        min-height: 30vh;
        display: flex;
        flex-direction: column;
    }
}

/* 
neuspjeli primjeri
async addToWatchlist(movieid) {
            var isInDatabase = false;
            var movies = await axios.get(baseURL + "user-movies");

            for(var i=0; i<movies.length; i++) {
                if (movies[i].userid == this.userid && movies[i].movieid == movieid) {
                    isInDatabase = true;
                }
            };
            if (!isInDatabase) {
                await axios.post(baseURL + "user-movies", {
                userid: this.userid,
                movieid: movieid,
                watched: false,
                favourite: false,
                watchlist: true,
                rating: null,
                });
            } 
            else {
                this.movie.watchlist = true;
                await axios.put(baseURL + "user-movies/" + this.userMovies.movieid);
            }

        try {
            const res = await axios.get(baseURL + "movies");
            this.movies = res.data;
        } catch (e) {
            console.error(e);
        } 
        ---2---
        async addToWatchlist(movieid) {
            var {data: movies} = await axios.get(baseURL + "user-movies");
            console.log(movies)
            var body = {
                        userid: this.userid,
                        movieid: movieid,
                        watched: false,
                        favourite: false,
                        watchlist: true,
                        rating: null,
                    }

            var id = null;

            movies.forEach(element => {
                if(element.userid === this.userid && element.movieid === movieid){
                    id = element.id;
                }
                
            });
            if(id){
                await axios.delete(baseURL + "user-movies/" + id)
            }
            
            await axios.post(baseURL + "user-movies", body)

        },*/

</style>

