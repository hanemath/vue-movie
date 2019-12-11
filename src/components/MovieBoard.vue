<template>
    <div class="movie container-fluid py-5" id="movieboard">
        <div class="row justify-content-center">
            <div class="col-9">
                <form class="form-inline">
                    <input class="form-control col-11" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2" type="submit">Search</button>
                </form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-9 card-group">
            <div class="card">
                <img src="../assets/movie.jpg" class="card-img-top" alt="">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/movie.jpg" class="card-img-top" alt="">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/movie.jpg" class="card-img-top" alt="">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieBoard',
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>