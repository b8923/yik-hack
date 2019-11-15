<template>
  <aside class="Karma">
    <button type="button" class="Karma-upvote" @click.prevent="upvote">
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

    <button type="button" class="Karma-downvote" @click.prevent="downvote">
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

  methods: {
    upvote() {
      return;
    },

    downvote() {
      return;
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
.Karma-upvote.active,
.Karma-downvote:active,
.Karma-downvote.active {
  fill: var(--Primary-color);
}
</style>
