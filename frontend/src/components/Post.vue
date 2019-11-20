<template>
  <article class="Post">
    <div>
      <p class="Post-text">{{ text }}</p>
      <p class="Post-time">{{ time }}</p>
      <a href="#" class="Post-repliesLink">{{ comments.length }} Replies</a>
    </div>
    <karma v-bind="{ id, upvotes, downvotes }">
      {{ karma }}
    </karma>
  </article>
</template>

<script>
import Karma from "@/components/Karma";
export default {
  name: "Post",

  components: {
    Karma
  },

  props: {
    id: {
      type: [String, Number],
      required: true
    },
    text: {
      type: String,
      required: true
    },

    time: {
      type: String,
      default: "0"
    },

    comments: {
      type: Array,
      default: () => []
    },

    upvotes: {
      type: Array,
      default: () => []
    },

    downvotes: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    karma() {
      return this.upvotes.length - this.downvotes.length;
    }
  }
};
</script>

<style scoped>
.Post {
  background-color: var(--Secondary-color);
  box-shadow: 0 2px 8px var(--Muted-color);
  display: flex;
  margin-bottom: 10px;
  padding: 10px 20px;
  position: relative;
}

.Post div:first-child {
  flex-grow: 1;
}

.Post-text {
  color: var(--Text-color);
  margin: 0;
  padding: 5px 0 20px 0;
}

.Post-time {
  bottom: 10px;
  color: var(--Muted-color);
  left: 20px;
  margin: 0;
  padding: 0;
  position: absolute;
}

.Post-repliesLink {
  bottom: 10px;
  color: var(--Muted-color);
  display: block;
  margin: 0 auto;
  position: absolute;
  text-align: center;
  text-decoration: none;
  width: 80%;
}
</style>
