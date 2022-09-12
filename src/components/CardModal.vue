<template>
    <div class='modal'>
        <div class='modal-inner'>
            <button @click="$emit('closeModal');" class='classX'>X</button>
            <div class='image'>
                <img v-bind:src="item.image" :alt="item.title">
            </div>
            <div class='content'>
                <h5 class="mt-3">{{item.title}}</h5>
                <h6 class="text-muted">{{item.details}}</h6>
                <p>{{item.description}}</p>
                <div class="mobile-center">
                    <h6 class="ratepar">Rate this movie</h6>
                    <div class="star_rating">
                        <button class="star">&#9734;</button>
                        <button class="star">&#9734;</button>
                        <button class="star">&#9734;</button>
                        <button class="star">&#9734;</button>
                        <button class="star">&#9734;</button>
                    </div>
                    <h6 class="ratepar mt-2">
                        My rate for this movie is : &nbsp;
                        <p class="ratenum"> 5/5</p>
                    </h6>
                    <div class="d-flex mobile-center-btn mt-4">
                        <!-- <button class="btn"><i class="fab">Watch</i></button>
                    <br /> -->
                        <button class="btn" @click="addToWatchlist(item.id)"><i class="fab">Watchlist</i></button>
                        <br />
                        <button class="btn" @click="addToFavourites(item.id)"><i class="fab">Favourites</i></button>
                        <br />
                        <button class="btn" @click="addToWatched(item.id)"><i class="fab">Watched</i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
var baseURL = 'http://localhost:3000/'

export default {
    props: {
        item: null,
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
        }
    }
}
</script>

<style scoped>

.col-4 {
    width: 70%;
    height: 30vw;
    object-fit: cover;
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

img {
    width: 100%;
}

h5 {
    top: 1%;
    left: 50%;
    display: flex;
    color: #8c38ff;
    text-shadow: 3px 3px black;
    font-size: 33px;
}

h6 {
    top: 9%;
    left: 50%;
    display: flex;
    text-shadow: 1px 1px black;
    font-size: 20px;
}

p {
    color: whitesmoke;
    text-shadow: 1px 1px black;
    top: 15%;
}

.btn {
    color: red;
    text-shadow: 1px 1px black;
}

.btn:hover {
    color: #198754;
}

.content {
    float: right;
    width: 63%;
    text-align: left;
    margin-left: 5px;
}

.modal-inner {
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    transform: translate(-50%, -50%);
    padding: 0;
    color: black;
    background-color: #343a40;
    width: 50%;
}

.classX {
    border: none;
    background: none;
    position: fixed;
    top: 0;
    right: 0;
    color: red;
}

.star {
    background: none;
    border: none;
    color: yellow;
    font-size: 40px;
    text-shadow: 2px 2px black;
}


.star_rating {
    text-align: center;
    align-items: center;
    margin: auto;
}

.ratenum {
    color: yellow;
}

.image {
    margin-right: 1rem;
    width: 40%;
}

.mobile-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.ratepar {
    align-self: center;
}

.mobile-center-btn {
    justify-content: center;
}

@media (max-width: 992px) {
    .modal-inner {
        flex-direction: column;
    }

    .modal-inner {
        width: 70%;
    }

    .image {
        margin-right: 0;
    }

    .content {
        width: 100%;
    }

    .image {
        width: 100%;
    }
}

@media (max-width: 1400px) {
    .modal-inner {
        width: 60%;
    }
}

@media (max-width: 1200px) {
    .modal-inner {
        width: 70%;
    }
}
</style>
