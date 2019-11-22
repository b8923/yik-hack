<template>
  <header v-if="$store.state.user" class="AppHeader">
    <slot name="karma-points">
      {{ karma }}
    </slot>
    <nav class="AppNav">
      <a href="#" class="AppNav-link active">Hot</a>
      <a href="#" class="AppNav-link">New</a>
    </nav>
    <new-post-button />
  </header>
</template>

<script>
import NewPostButton from "@/components/NewPostButton";

export default {
  name: "Header",

  components: {
    NewPostButton
  },

  computed: {
    karma() {
      return this.$store.getters.karma;
    }
  }
};
</script>

<style>
.AppHeader {
  align-items: center;
  background-color: var(--Primary-color);
  color: var(--Secondary-color);
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 10px 15px;
}

.AppNav {
  border-radius: 5px;
  border: 2px solid var(--Secondary-color);
  color: var(--Secondary-color);
  display: flex;
  justify-content: space-between;
}

.AppNav .AppNav-link:visited {
  color: var(--Secondary-color);
}

.AppNav .AppNav-link:active,
.AppNav .AppNav-link.active {
  background-color: var(--Secondary-color);
  color: var(--Primary-color);
}

.AppNav .AppNav-link {
  padding: 2px 20px;
  text-decoration: none;
}

.AppNav-link:not(:last-child) {
  border-right: 2px solid var(--Secondary-color);
}
</style>
