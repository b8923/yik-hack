<template>
  <aside class="Karma">
    <button
      type="button"
      :class="['Karma-upvote', { 'is-active': hasUpvoted }]"
      @click.prevent="upvote"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="36"
        height="36"
      >
        <path
          class="heroicon-ui"
          d="M8.7 14.7a1 1 0 0 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 11.42l-3.3 3.3z"
        />
      </svg>
    </button>

    <p class="Karma-points">
      <slot />
    </p>

    <button
      type="button"
      :class="['Karma-downvote', { 'is-active': hasDownvoted }]"
      @click.prevent="downvote"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="36"
        height="36"
      >
        <path
          class="heroicon-ui"
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
        />
      </svg>
    </button>
  </aside>
</template>

<script>
export default {
  name: "Karma",

  props: {
    id: {
      type: [String, Number],
      required: true
    },

    upvotes: {
      type: Array,
      required: true
    },

    downvotes: {
      type: Array,
      required: true
    }
  },

  computed: {
    userId() {
      return this.$store.state.user.id;
    },

    hasUpvoted() {
      return this.upvotes.includes(this.userId);
    },

    hasDownvoted() {
      return this.downvotes.includes(this.userId);
    }
  },

  methods: {
    upvote() {
      this.$store.dispatch("upvote", this.id);
    },

    downvote() {
      this.$store.dispatch("downvote", this.id);
    }
  }
};
</script>

<style>
.Karma {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Karma-points {
  color: var(--Primary-color);
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
}

.Karma-upvote,
.Karma-downvote {
  background: none;
  border: none;
  cursor: pointer;
  fill: var(--Muted-color);
  margin: 0;
  padding: 0;
}

.Karma-upvote:active,
.Karma-upvote.is-active,
.Karma-downvote:active,
.Karma-downvote.is-active {
  fill: var(--Primary-color);
}
</style>
