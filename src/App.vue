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
  --gray: #dee2e6;
  --red: #fa5252;
  --spacing: 1.25rem;
  --border-radius: 3px;
  --border-size: 3px;
  --font-family: sans-serif;
}

#app {
  font-family: var(--font-family);
  color: var(--black);
  background: var(--white);
  min-height: 100vh;
  display: grid;
}

#app > * {
  padding: var(--spacing);
}

.hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.button {
  text-decoration: none;
  font-weight: bold;
  color: var(--black);
  background: var(--white);
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-radius: var(--border-radius);
  border: var(--border-size) solid currentColor;
  display: inline-grid;
}
</style>
