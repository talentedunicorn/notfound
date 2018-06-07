<template>
  <header>
    <router-link class="button" v-if="back" :to="back">Go back</router-link>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    back: {
      type: String
    }
  }
}
</script>

<style scoped>
  header {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: var(--spacing);
    align-items: center;
    align-self: start;
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    font-size: var(--size-2);
  }
</style>
