import Vue from 'vue'
import Router from 'vue-router'
import MovieBoard from '@/components/MovieBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MovieBoard',
      component: MovieBoard
    },
    {
      path: '/imdb',
      beforeEnter() { location.href = 'http://imdb.com' }
    },
    {
      path: '/rotten-tomatoes',
      beforeEnter() { location.href = 'https://www.rottentomatoes.com/' }
    },
  ]
})