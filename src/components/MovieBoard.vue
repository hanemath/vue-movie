<template>
    <div class="movie container-fluid pb-5 px-0" id="movieboard">
        <div class="row pt-0">
            <img src="../assets/halloween.jpg" alt="Halloween Week" class="img-bg px-0 mx-0">
        </div>
        <div class="row justify-content-center pt-3">
            <div class="col-7">
                <form class="form-inline">
                    <input class="form-control col-5 mx-2" type="text" placeholder="Title" aria-label="Search" v-model="searchword">
                    <input class="form-control col-3 mx-2" type="text" placeholder="Year" aria-label="Year" v-model="searchyear">
                    <button class="btn btn-custom px-5 my-2 mx-1" type="submit" v-on:click="searchMovie">Search</button>
                </form>
            </div>
        </div>
        <h2>Result</h2>
        <div class="row justify-content-center">
            <div class="col-11 row justify-content-center">
                <div class="card col-3 px-0 m-4" v-for="movie in movies">
                    <img class="card-img-top img-fluid img-card" v-bind:src="movie.Poster" alt="card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{movie.Title}}</h5>
                        <p class="card-text">Released on {{movie.Year}}</p>
                        <p class="card-text">{{movie.Rated}}</p>
                        <a href="#" class="btn btn-custom">Lihat Info</a>
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
            searchyear: ''
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
            includeYear(this.searchyear) {
                var url = 'http://www.omdbapi.com/?apikey=83e7b6de&s='
                return (searchyear === null ? this.url+this.searchword : this.url+this.searchword+'&y='+this.searchyear)
            };
            //var url = 'http://www.omdbapi.com/?apikey=83e7b6de&s='+this.searchword;
            fetch(url)
            .then( response => response.json())
            .then(data => {
                const datafilm = data.Search
                console.log(datafilm)
                this.movies = datafilm
                //this.movies.push(datafilm)
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
</style>