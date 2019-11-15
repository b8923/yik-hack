<template>
  <header class="AppHeader">
    <slot name="karma-points">
      540
    </slot>
    <nav class="AppNav">
      <a href="#" class="AppNav-link active">Hot</a>
      <a href="#" class="AppNav-link">New</a>
    </nav>
    <new-post-button></new-post-button>
  </header>
</template>

<script>
import NewPostButton from "@/components/NewPostButton";

export default {
  name: "Header",

  components: {
    NewPostButton
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
  display: flex;
  justify-content: space-between;
  border: 2px solid var(--Secondary-color);
  border-radius: 5px;
  color: var(--Secondary-color)
}

.AppNav .AppNav-link:visited {
  color: var(--Secondary-color)
}

.AppNav .AppNav-link:active,
.AppNav .AppNav-link.active {
  color: var(--Primary-color);
  background-color: var(--Secondary-color);
}

.AppNav .AppNav-link {
  padding: 2px 20px;
  text-decoration: none;
}

.AppNav-link:not(:last-child) {
  border-right: 2px solid var(--Secondary-color);
}
</style>
