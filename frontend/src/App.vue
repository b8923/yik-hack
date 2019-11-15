<template>
  <div id="app">
    <main class="MainApp">
      <app-header></app-header>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",

  components: {
    "app-header": Header
  },

  computed: {
    loading() {
      return false;
    }
  },

  mounted() {}
};
</script>

<style>
:root {
  --Primary-color: #2bd4b5;
  --Primary-colorDark: #1ca38a;
  --Secondary-color: #fff;
  --Text-color: #2a2a2a;
  --Muted-color: #bfbfbf;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}

.MainApp {
  margin: 50px auto;
  max-width: 368px;
}
</style>
