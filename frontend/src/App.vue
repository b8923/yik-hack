<template>
  <div id="app">
    <section class="AppMain">
      <app-header />
      <main class="AppView">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </main>
    </section>
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
  --Muted-color-dark: #acacac;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}

.AppMain {
  margin: 50px auto;
  max-width: 368px;
}

.AppView {
  height: 568px;
  overflow-y: scroll;
  width: 100%;
  border: 1px solid #ccc;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
