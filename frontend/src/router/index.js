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

const routes = [
  {
    name: "signup",
    path: "/signup",
    component: Auth
  },
  {
    name: "login",
    path: "/login",
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
