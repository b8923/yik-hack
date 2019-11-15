<template>
  <section class="PostList">
    <post v-for="post in posts" :key="post._id" v-bind="post" />
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
