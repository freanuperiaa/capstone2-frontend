import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue";
import store from "../store/index.js";
import Profile from "../views/Profile.vue";
import NewPost from "../views/NewPost.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/new-post",
    name: "new-post",
    component: NewPost
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {

  console.log(store.state.isLoggedIn)

    if(!to.meta.allowAnonymous && !store.state.isLoggedIn) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        });
    }else {
        next();
    }

});

export default router
