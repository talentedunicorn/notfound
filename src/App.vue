<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
:root {
  --black: #333;
  --white: #fff;
  --spacing: 1.25rem;
  --font-family: sans-serif;
}

#app {
  font-family: var(--font-family);
}
</style>
