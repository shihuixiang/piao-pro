import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Movie from '@/views/Movie/Movie'
import MovieMain from '@/views/MovieMain'
import Zoom from '@/views/Zoom'
import Login from '@/views/Login'
import MovieDetails from '@/views/MovieDetails/index.vue'

Vue.use(Router)
let newRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/movieMain',
      component: MovieMain
    },
    {
      path: '/zoom',
      component: Zoom,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/moviedetails/:movie_id',
      name: 'moviedetails',
      component: MovieDetails
    }
  ]
})
newRouter.beforeEach((to, from, next) => {
  let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  if (to.meta.isLogin && !userInfo) {
    window.localStorage.setItem('toPath', to.path)
    next('login')
  } else {
    next()
  }
})
export default newRouter
