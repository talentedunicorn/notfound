<template>
  <section>
    <router-link class="button" to="/">Go back</router-link>
    <h1>Select template</h1>

    <ul v-if="templates.length > 0">
      <li v-for="(template, index) in templates" :key="index"><router-link to="/template">{{ template.title }}</router-link></li>
    </ul>

    <p class="placeholder" v-else>No templates found</p>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Catalog',
  data() {
    return {
      templates: []
    }
  },
  mounted() {
    // Get templates
    axios.get('/api/templates')
      .then((response) => { this.templates = response.data })
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

  ul,
  p {
    grid-column: col / span 2;
  }

  ul {
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

  li > a {
    color: currentColor;
    text-decoration: none;
  }

  h1 {
    grid-column: col 2;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    font-size: var(--size-2);
  }
</style>
