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
    posts: [],
    userPosts: []
  },
  getters: {
    karma: ({ userPosts }) => {
      return userPosts.reduce((sum, post) => {
        sum += post.upvotes.length - post.downvotes.length;
        console.log([post.upvotes, post.downvotes]);
        return sum;
      }, 0.0);
    }
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

    UPVOTE_POST: (state, post) => {
      state.posts = state.posts.map(localPost =>
        localPost.id !== post.id ? localPost : post
      );
    },

    DOWNVOTE_POST: (state, post) => {
      state.posts = state.posts.map(localPost =>
        localPost.id !== post.id ? localPost : post
      );
    },

    STORE_USER_POSTS: (state, posts) => {
      state.userPosts = posts;
    }
  },
  actions: {
    storeLocation({ commit }, { latitude, longitude }) {
      commit("STORE_POSITION", {
        latitude,
        longitude
      });
    },

    signup({ commit, dispatch }, form) {
      return new Promise(resolve => {
        api
          .post("/auth/signup", form)
          .then(({ data }) => {
            commit("STORE_USER", data);
            dispatch("syncLocalState");
            resolve(data);
          })
          .catch(err => console.log(err));
      });
    },

    login({ commit, dispatch }, form) {
      return new Promise(resolve => {
        api
          .post("/auth/login", form)
          .then(({ data }) => {
            commit("STORE_USER", data);
            dispatch("syncLocalState");
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

    loadUserPosts({ commit }) {
      api
        .get("/user-posts")
        .then(({ data }) => commit("STORE_USER_POSTS", data))
        .catch(err => console.log(err));
    },

    storePost({ dispatch }, text) {
      return new Promise(resolve => {
        api
          .post("/posts", { text })
          .then(() => {
            dispatch("loadPosts");
            dispatch("loadUserPosts");
            resolve();
          })
          .catch(err => console.log(err));
      });
    },

    loadLocalState({ commit }) {
      return new Promise(resolve => {
        const localState = localStorage.getItem("yhstate");
        if (localState) {
          const state = JSON.parse(localState);
          commit("STORE_USER", state.user);
        }
        resolve();
      });
    },

    syncLocalState({ state }) {
      localStorage.setItem("yhstate", JSON.stringify(state));
    },

    upvote({ commit }, postId) {
      api
        .post(`/posts/${postId}/upvote`)
        .then(({ data: post }) => commit("UPVOTE_POST", post))
        .catch(err => console.log(err));
    },

    downvote({ commit }, postId) {
      api
        .post(`/posts/${postId}/downvote`)
        .then(({ data: post }) => commit("DOWNVOTE_POST", post))
        .catch(err => console.log(err));
    }
  }
});
