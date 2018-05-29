<template>
  <section>
    <router-link class="button" to="/">Go back</router-link>
    <h1>Select template</h1>

    <ul v-if="templates.length > 0">
      <li v-for="(template, index) in templates" :key="index">{{ template.title }}</li>
    </ul>

    <p class="placeholder" v-else>No templates found</p>
  </section>
</template>

<script>
const templates = [
  {
    title: 'Search'
  },
  {
    title: 'Gif'
  }
]

export default {
  name: 'Catalog',
  data () {
    return {
      templates
    }
  }
}
</script>

<style scoped>
  section {
    display: grid;
    grid-template-columns: [col] auto  [col] 1fr;
    grid-template-rows: [row] min-content [row] auto;
    grid-gap: var(--spacing);
  }

  .button {
    grid-column: col / span 1;
    grid-row: row / span 1;
  }

  ul {
    grid-column: col / span 2;
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: var(--spacing);
  }

  li {
    background: var(--gray);
    border-radius: var(--border-radius);
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: var(--size-4);
  }

  h1 {
    grid-column: col 2;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    font-size: var(--size-2);
  }
</style>
