<template>
  <section class="PostList">
    <post v-for="post in posts" :key="post.id" v-bind="post" />
  </section>
</template>

<script>
import Post from "@/components/Post";
export default {
  name: "PostList",

  components: {
    Post
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    },

    position() {
      return this.$store.state.position;
    }
  },

  watch: {
    "position.latitude": function() {
      this.loadPosts();
    }
  },

  mounted() {
    this.loadPosts();
  },

  methods: {
    loadPosts() {
      if (this.position.latitude) {
        this.$store.dispatch("loadPosts");
        this.$store.dispatch("loadUserPosts");
      }
    }
  }
};
</script>

<style scoped>
.PostList {
  background-color: #f2f2f2;
  height: 100%;
  padding-top: 10px;
}
</style>
