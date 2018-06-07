<template>
  <section class="page">
    <Header title="Select template" back="/" />

    <ul v-if="templates.length > 0">
      <li v-for="(template, index) in templates" :key="index"><router-link to="/template">{{ template.title }}</router-link></li>
    </ul>

    <p class="placeholder" v-else>No templates found</p>

    <Form class="form" v-if="create"/>

    <button class="button" @click="toggleCreate">{{ create ? 'cancel': 'create a new template' }}</button>
  </section>
</template>

<script>
import axios from 'axios'
import Form from './Form'

export default {
  name: 'Catalog',
  components: { Form },
  data() {
    return {
      create: false,
      templates: []
    }
  },
  mounted() {
    // Get templates
    axios.get('/api/templates')
      .then((response) => {
        this.templates = response.data
      })
      .catch((error) => console.log(error))
  },
  methods: {
    toggleCreate() {
      this.create = !this.create
    }
  }
}
</script>

<style scoped>
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

  button {
    margin: var(--spacing) 0;
  }
</style>
