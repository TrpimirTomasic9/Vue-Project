<template>
    <br />
    <div class="pagetitle">
        <h1 class="text-center">My Watched movies</h1>
    </div>
    <div class="container" v-if='movies'>
        <div v-for='movie in movieswatched' :key='movie.movieid'>
            <div class="card mb-4 mr-2 ml-2">
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
                        <starrating @click="addToUserRating(movie.id)" @rating='check' ></starrating>
                        <div class="btn-group">                           
                            <button class="btn mr-3"><i class="fab">Watch Now</i></button>
                            <button class="btn mr-3" @click="addToWatchlist(movie.id)"><i class="fab">Watchlist</i></button>
                            <button class="btn mr-3" @click="addToFavourites(movie.id)"><i class="fab">Favourites</i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h1 v-if="counter == 0" class="text-center">You have no movies in your watched list</h1>
    <br>
</template>

<script>
import StarRating from '../components/StarRating.vue';
import axios from 'axios';
var baseURL = 'http://localhost:3000/'


export default {
    components: {
        'starrating': StarRating
    }, 
    data() {
        return {
            movieswatched: [],
            movies: [],
            userid: $cookies.get('id')
        }
    },
    async mounted() {
        try {
            const res = await axios.get(baseURL + 'user-movies-watched');
            this.movies = res.data;
        } catch (e) {
            console.error(e)
        }
        this.movies.forEach(async (item) => {
            const {data: movie} = await axios.get(baseURL + `movies/${item.movieid}`)
            console.log(movie)
            this.movieswatched.push(movie)
        })
    },
    methods: {
         check(rating){
            this.rating = rating
        },
        async addToUserRating(movieid) {
            var {data: movies} = await axios.get(baseURL + "user-rating");
            console.log(movies)
            var body = {
                        userid: this.userid,
                        movieid: movieid,
                        userRating: this.rating
                    }

            var id = null;

            movies.forEach(element => {
                if(element.userid === this.userid && element.movieid === movieid){
                    id = element.id;
                }
                
            });
            if(id){
                await axios.delete(baseURL + "user-rating/" + id)
            }
            
            await axios.post(baseURL + "user-rating", body)

        },
        async removeCard(index) {
            await axios.delete(baseURL + 'user-movies-watched/' + index, {
                id: index,
                userid: this.userid,
                movieid: this.movieid
            });
            location.reload();
        },
        async addToFavourites(movieid) {
            var {data: movies} = await axios.get(baseURL + "user-movies-favourites");
            console.log(movies)

            var body = {
                        userid: this.userid,
                        movieid: movieid
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

        },
        async addToWatchlist(movieid) {
            var {data: movies} = await axios.get(baseURL + "user-movies-watchlist");
            console.log(movies)
            var body = {
                        userid: this.userid,
                        movieid: movieid
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
    