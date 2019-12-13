<template>
    <div class="movie container-fluid py-5" id="movieboard">
        <div class="row justify-content-center">
            <div class="col-9">
                <form class="form-inline">
                    <input class="form-control col-11" type="text" placeholder="Search" aria-label="Search" v-model="searchword">
                    <button class="btn btn-outline-success my-2" type="submit" v-on:click="searchMovie">Search</button>
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-6">
                <h2>Result</h2>
                <div class="card col-6" v-for="movie in movies">
                    <img class="card-img-top img-fluid" v-bind:src="movie.Poster" alt="card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{movie.Title}}</h5>
                        <p class="card-text">{{movie.Year}}</p>
                        <a href="#" class="btn btn-primary">Lihat</a>
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
            searchword: '',
        }
    },
    mounted() {
        //INI DAH BERHASIL
        // var url = 'http://www.omdbapi.com/?apikey=83e7b6de&s='+this.searchword;
        // fetch(url)
        // .then( response => response.json())
        // .then(data => {
        //     this.movies = data;
        //     console.log(this.movies)
        //     console.log(this.movies.Search[0].Title)

        // })
    },
    methods: {
        searchMovie() {
            var url = 'http://www.omdbapi.com/?apikey=83e7b6de&s='+this.searchword;
            fetch(url)
            .then( response => response.json())
            .then(data => {
                const datafilm = data.Search
                console.log(datafilm)
                this.movies = datafilm
                //this.movies.push(datafilm)
            })
            .catch(error => console.log(error))

            //Mapping
            // let films = datafilm
            // films.map(film => {
            //     let judul = film.Title
            // })
        },    
    },
}
</script>

<style scoped>

</style>