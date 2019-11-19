<template>
  <section class="NewPost">
    <form class="NewPost-form" @submit.prevent="submit">
      <textarea
        v-model="postText"
        class="NewPost-text"
        placeholder="What's on your mind?"
      ></textarea>

      <footer class="NewPost-footer">
        <span class="NewPost-characters">{{ charactersLeft }}</span>
        <button type="submit" class="NewPost-submitButton">Send</button>
      </footer>
    </form>
  </section>
</template>

<script>
export default {
  name: "NewPost",

  data() {
    return {
      postText: ""
    };
  },

  computed: {
    charactersLeft() {
      return 200 - this.postText.length;
    }
  },

  methods: {
    submit() {
      this.$store.dispatch("storePost", this.postText).then(() => {
        this.postText = "";
        this.$router.push({ name: "main" });
      });
    }
  }
};
</script>

<style scoped>
.NewPost {
  color: var(--Muted-color);
}

.NewPost-form {
  position: relative;
}

.NewPost-text {
  border: none;
  color: var(--Muted-color);
  font-size: 1rem;
  height: 100px;
  padding: 20px;
  width: 100%;
}

.NewPost-footer {
  display: flex;
  justify-content: flex-end;
}

.NewPost-characters {
  margin-right: 2rem;
}

.NewPost-submitButton {
  background: none;
  border: none;
  box-shadow: none;
  color: var(--Muted-color);
  cursor: pointer;
  font-size: 1rem;
  margin-right: 1rem;
}

.NewPost-submitButton:active {
  color: var(--Muted-color-dark);
}
</style>
