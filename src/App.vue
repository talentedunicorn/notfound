<template>
  <div id="app">
    <Notification v-if="notification.title" :title="notification.title" :type="notification.type"/>
    <router-view/>
  </div>
</template>

<script>
import Notification from './components/Notification'
export default {
  name: 'App',
  components: { Notification },
  computed: {
    notification() {
      return this.$store.state.notification
    }
  },
  mounted() {
    this.$store.dispatch('fetchTemplates')
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

:root {
  --black: #333;
  --white: #fff;
  --gray: #ced4da;
  --red: #fa5252;
  --green: #40c057;
  --letter-spacing: 0.125em;
  --spacing: 1.25rem;
  --border-radius: 5px;
  --border-size: 3px;
  --font-family: 'Nunito', sans-serif;
  --bold: 700;
  --normal: 400;
  --size-small: 0.5rem;
  --size-1: 1rem;
  --size-2: 1.2rem;
  --size-3: 1.44rem;
  --size-4: 1.728rem;
  --size-5: 2.074rem;
}

#app {
  font-family: var(--font-family);
  color: var(--black);
  background: var(--white);
  min-height: 100vh;
  display: grid;
  align-content: start;
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
  font-weight: var(--bold);
  line-height: initial;
  color: var(--black);
  background: var(--white);
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-radius: var(--border-radius);
  border: var(--border-size) solid currentColor;
  display: inline-grid;
  cursor: pointer;
}

.placeholder {
  font-size: var(--size-5);
  color: var(--gray);
  font-weight: var(--bold);
}

.placeholder .button {
  border: none;
}

.page {
  display: grid;
  grid-template-rows: min-content auto;
  align-content: start;
}
</style>
