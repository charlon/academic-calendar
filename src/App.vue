<template>
  <header class="bg-light text-center">
    <img alt="Vue logo" src="./assets/logo.png" class="inline" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </header>
  <main class="p-12">
    <router-view />
  </main>
  <footer class="bg-secondary text-center">
    this is the footer
  </footer>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
