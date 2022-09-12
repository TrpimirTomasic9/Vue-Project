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

var baseURL = 'http://localhost:3000/'

export default {
    components: {
        'card-modal': CardModal
    },
    data() {
        return {
            item: null,
            movies: []
        }
    },
    async mounted() {
        try {
            const res = await axios.get(baseURL + 'movies');
            this.movies = res.data;
        } catch (e) {
            console.error(e)
        }
    },
    methods: {
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
        },
        async addToFavourites(index) {
            await axios.put(baseURL + 'movies/' + index, {
                id: index,
                title: this.movies[index - 1].title,
                details: this.movies[index - 1].details,
                description: this.movies[index - 1].description,
                image: this.movies[index - 1].image,
                watchlist: this.movies[index - 1].watchlist,
                favourite: "yes",
                watched: this.movies[index - 1].watched
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
        height: 24vh !important;
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

</style>
