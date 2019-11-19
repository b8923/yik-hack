import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "@/views/Auth";
import PostList from "@/views/PostList";
import NewPost from "@/views/NewPost";

Vue.use(VueRouter);

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
    component: PostList
  },
  {
    name: "new-post",
    path: "/post/create",
    component: NewPost
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
