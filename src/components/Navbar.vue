<template>
<div id="nav" class="mb-5">
    <nav class="navbar .navbar-expand{-sm|-md|-lg|-xl} navbar-dark custombg fixed-top">
        <router-link class="navbar-brand active" to="/">
            <b>Movie Checker</b>
        </router-link>
        <router-link class="on-user ml-auto px-4" to="/" >hey , you're on!</router-link>
        <button class="navbar-toggler m-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
        </div>
    </nav>
</div>   
</template>

<script>
export default {
    name: 'navbar',
    data () {
        return {

        }
    }
}
</script>

<style>
nav form .form-inline {
    margin: 0;
    padding: 0;
}
nav .on-user{
    color:#fff;
}
nav .link-nav {
    color: #fff;
}
#app .custombg {
    background-color: #01203c
}
</style>
 