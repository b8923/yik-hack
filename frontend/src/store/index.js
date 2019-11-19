import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    currentList: "hot",
    position: {
      latitude: null,
      longitude: null
    },
    posts: []
  },
  mutations: {
    STORE_POSITION: (state, position) => {
      state.position = position;
    },

    STORE_USER: (state, user) => {
      state.user = user;
    },

    STORE_POSTS: (state, posts) => {
      state.posts = posts;
    },

    UPVOTE_POST: (state, postId) => {
      const post = state.posts.find(post => post.id === postId);
      console.log(post);
    },

    DOWNVOTE_POST: (state, postId) => {
      const post = state.posts.find(post => post.id === postId);
      console.log(post);
    }
  },
  actions: {
    storeLocation({ commit }, { latitude, longitude }) {
      commit("STORE_POSITION", {
        latitude,
        longitude
      });
    },

    signup({ commit }, form) {
      return new Promise(resolve => {
        api
          .post("/auth/signup", form)
          .then(({ data }) => {
            commit("STORE_USER", data);
            resolve(data);
          })
          .catch(err => console.log(err));
      });
    },

    login({ commit }, form) {
      return new Promise(resolve => {
        api
          .post("/auth/login", form)
          .then(({ data }) => {
            commit("STORE_USER", data);
            resolve(data);
          })
          .catch(err => console.log(err));
      });
    },

    loadPosts({ commit }) {
      api
        .get("/posts")
        .then(({ data }) => commit("STORE_POSTS", data))
        .catch(err => console.log(err));
    },

    storePost({ dispatch }, text) {
      return new Promise(resolve => {
        api
          .post("/posts", { text })
          .then(() => {
            dispatch("loadPosts");
            resolve();
          })
          .catch(err => console.log(err));
      });
    },

    upvote({ commit }, postId) {
      // API call
      commit("UPVOTE_POST", postId);
    },

    downvote({ commit }, postId) {
      // API call
      commit("DOWNVOTE_POST", postId);
    }
  }
});
