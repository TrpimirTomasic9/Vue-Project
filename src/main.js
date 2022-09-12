import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));


/* const store = createStore({
    state(){
        return {
            faves: JSON.parse(localStorage.getItem('faves')) || [],
            watch: JSON.parse(localStorage.getItem('watch')) || [],
            watched: JSON.parse(localStorage.getItem('watched')) || [],
            user: null,
        }
    },
    mutations: {
        updateFaves(state, movie){
            state.faves.push(movie)
            state.faves = uniqueArray(state.faves)
            localStorage.setItem('faves', JSON.stringify(state.faves));
        },
        updateWatch(state, movie){
            state.watch.push(movie)
            state.watch = uniqueArray(state.watch)
            localStorage.setItem('watch', JSON.stringify(state.watch));
        },
        updateWatched(state, movie){
            state.watched.push(movie)
            state.watched = uniqueArray(state.watched)
            localStorage.setItem('watched', JSON.stringify(state.watched));
        },
        login(state, username){
            state.user = username
        },
        logout(state){
            state.user = null;
        }
    }
}); */

const app = createApp(App)

app.use(router)
/* app.use(store) */

app.mount('#app')
