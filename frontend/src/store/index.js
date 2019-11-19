import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentList: "hot",
    posts: [
      {
        text: "Lorem ipsum dolor sit amet",
        author: {
          _id: 125123213
        },
        comments: [],
        upvotes: [1, 2, 3],
        downvotes: [1]
      },
      {
        text: "Lorem ipsum dolor sit amet",
        author: {
          _id: 125123213
        },
        comments: [1],
        upvotes: [1, 2],
        downvotes: [1, 2, 3]
      },
      {
        text: "Lorem ipsum dolor sit amet",
        author: {
          _id: 125123213
        },
        comments: [1, 2],
        upvotes: [1, 2, 3, 4, 5, 6, 7],
        downvotes: [1, 2, 3]
      },
      {
        text: "Lorem ipsum dolor sit amet",
        author: {
          _id: 125123213
        },
        comments: [],
        upvotes: [1, 2, 3],
        downvotes: [1]
      },
      {
        text: "Lorem ipsum dolor sit amet",
        author: {
          _id: 125123213
        },
        comments: [1, 2],
        upvotes: [1, 2, 3, 4, 5, 6, 7],
        downvotes: [1, 2, 3]
      },

      {
        text: "Lorem ipsum dolor sit amet",
        author: {
          _id: 125123213
        },
        comments: [],
        upvotes: [1, 2, 3],
        downvotes: [1]
      },
      {
        text: "Lorem ipsum dolor sit amet",
        author: {
          _id: 125123213
        },
        comments: [1],
        upvotes: [1, 2],
        downvotes: [1, 2, 3]
      }
    ]
  },
  mutations: {},
  actions: {
    storePost() {
      //
    }
  }
});
