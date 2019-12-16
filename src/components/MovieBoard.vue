<template>
    <div class="movie container-fluid pb-5 pt-2" id="movieboard">
        <div class="row justify-content-center pt-3" >
            <div class="col-7">
                <p>
                    Movie Bank is a simple website to check any movies or movie-based video games, using title
                    and year released from OMDB (Online Movie Database).
                </p>
                <form class="form-inline">
                    <input class="form-control col-5 mx-2" type="text" placeholder="Title" aria-label="Search" v-model="searchword">
                    <input class="form-control col-3 mx-2" type="text" placeholder="Year" aria-label="Year" v-model="searchyear">
                    <button class="btn btn-custom px-5 my-2 mx-1" type="submit" v-on:click="searchMovie">Search</button>
                </form>
            </div>
            </div>
        
        <div class="row justify-content-center">
            <div class="col-11 row justify-content-center">
                <div class="card col-3 px-0 m-4" v-for="movie in movies" v-bind:key="movie.imdbID">
                    <img class="card-img-top img-fluid img-card" v-bind:src="movie.Poster" alt="card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{movie.Title}}</h5>
                        <p class="card-text">Released on {{movie.Year}}</p>
                        <p class="card-text">IMDB #ID:{{movie.imdbID}}</p>
                        <router-link class="btn btn-custom">MASIH BUTUH DIEDIT YAAA</router-link>
                    </div>
                </div>
            </div>
        </div>
        <h4 class="text-left pl-5 pb-0">Popular Movies</h4><hr>
        <div class="row justify-content-center">
            <div class="col-12 row justify-content-center">
                <div class="card col-2 px-0 m-2">
                    <img class="card-img-top img-fluid img-fav" v-bind:src="favorit1.Poster" alt="card image cap">
                    <div class="card-body">
                        <h6 class="card-title">HARRY POTTER SERIES</h6>
                    </div>
                </div>
                <div class="card col-2 px-0 m-2">
                    <img class="card-img-top img-fluid img-fav" v-bind:src="favorit2.Poster" alt="card image cap">
                    <div class="card-body">
                        <h6 class="card-title">AVENGER SERIES</h6>
                    </div>
                </div>
                <div class="card col-2 px-0 m-2">
                    <img class="card-img-top img-fluid img-fav" v-bind:src="favorit3.Poster" alt="card image cap">
                    <div class="card-body">
                        <h6 class="card-title">JURASSIC PARK SERIES</h6>
                    </div>
                </div>
                <div class="card col-2 px-0 m-2">
                    <img class="card-img-top img-fluid img-fav" v-bind:src="favorit4.Poster" alt="card image cap">
                    <div class="card-body">
                        <h6 class="card-title">SHERLOCK HOLMES SERIES</h6>
                    </div>
                </div>
                <div class="card col-2 px-0 m-2">
                    <img class="card-img-top img-fluid img-fav" v-bind:src="favorit5.Poster" alt="card image cap">
                    <div class="card-body">
                        <h6 class="card-title">STAR WARS SERIES</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { error } from 'util';
export default {
    name: 'MovieBoard',
    data() {
        return {
            movies: [],
            favorit1:[],
            favorit2:[],
            favorit3:[],
            favorit4:[],
            favorit5:[],
            searchword: '',
            searchyear: ''
        }
    },
    mounted() {
        var url = 'http://www.omdbapi.com/?apikey=83e7b6de&s=harry+potter'
        fetch(url)
        .then( response => response.json())
        .then(data => {
            const favoritHarry = data.Search[0]
            console.log(favoritHarry)
            this.favorit1 = favoritHarry
        })
        .catch(error => console.log(error))
        
        var url = 'http://www.omdbapi.com/?apikey=83e7b6de&s=avenger'
        fetch(url)
        .then( response => response.json())
        .then(data => {
            const favoritAvenger = data.Search[0]
            console.log(favoritAvenger)
            this.favorit2 = favoritAvenger
        })
        .catch(error => console.log(error))

        var url = 'http://www.omdbapi.com/?apikey=83e7b6de&s=jurassic'
        fetch(url)
        .then( response => response.json())
        .then(data => {
            const favoritJurassic = data.Search[0]
            console.log(favoritJurassic)
            this.favorit3 = favoritJurassic
        })
        .catch(error => console.log(error))

        var url = 'http://www.omdbapi.com/?apikey=83e7b6de&s=sherlock'
        fetch(url)
        .then( response => response.json())
        .then(data => {
            const favoritSherlock = data.Search[0]
            console.log(favoritSherlock)
            this.favorit4 = favoritSherlock
        })
        .catch(error => console.log(error))

        var url = 'http://www.omdbapi.com/?apikey=83e7b6de&s=star+wars'
        fetch(url)
        .then( response => response.json())
        .then(data => {
            const favoritStarwars = data.Search[0]
            console.log(favoritStarwars)
            this.favorit5 = favoritStarwars
        })
        .catch(error => console.log(error))
    },
    methods: {
        searchMovie() {
            var url = 'http://www.omdbapi.com/?apikey=83e7b6de&s='+this.searchword + (this.searchyear?'&y='+this.searchyear:'' )
            fetch(url)
            .then( response => response.json())
            .then(data => {
                const datafilm = data.Search
                console.log(datafilm)
                this.movies = datafilm
            })
            .catch(error => console.log(error))

        },    
    },
}
</script>

<style scoped>
.btn-custom {
    background-color: #992e24;
    color: antiquewhite;
}
.img-bg {
    width: 100%;
    height: 300px;
}
.card {
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

}
.img-card {
    margin-left: 0;
}
.card .card-body h5{
    font-size: 18px;
    font-weight: 700;
}

.img-fav {
    margin-left: 0;
}
</style>