import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "@/views/Auth";
import PostList from "@/views/PostList";
import NewPost from "@/views/NewPost";
import store from "@/store";

Vue.use(VueRouter);

function requiresAuth(to, from, next) {
  if (!store.state.user) next({ name: "login" });
  else next();
}

function checkLogin(to, from, next) {
  if (store.state.user && ["login", "signup"].includes(to.name)) {
    next({ name: "main" });
  } else {
    next();
  }
}

const routes = [
  {
    name: "signup",
    path: "/signup",
    beforeEnter: checkLogin,
    component: Auth
  },
  {
    name: "login",
    path: "/login",
    beforeEnter: checkLogin,
    component: Auth
  },
  {
    name: "main",
    path: "/",
    beforeEnter: requiresAuth,
    component: PostList
  },
  {
    name: "new-post",
    path: "/post/create",
    beforeEnter: requiresAuth,
    component: NewPost
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
