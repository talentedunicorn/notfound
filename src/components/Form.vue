<template>
  <form>
    <label>
      <span>Title</span>
      <input v-model.trim="title" type="text"/>
    </label>

    <label>
      <span>Slug</span>
      <input v-model="slug" disabled="true" type="text"/>
    </label>

    <button class="button" @click.prevent="handleSubmit">Save</button>
  </form>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Form',
    data() {
      return {
        title: ''
      }
    },
    computed: {
      slug() {
        return this.title
          .replace(/(\ )/g, '-')
          .replace(/[^a-zA-Z0-9-]/g, '')
          .toLowerCase()
      }
    },
    methods: {
      handleSubmit() {
        if (this.title.length > 0 && this.slug.length > 0) {
          let template = {
            title: this.title,
            slug: this.slug
          }

          axios.post('/api/templates', template)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        }
      }
    }
  }
</script>

<style scoped>
  form {
    display: grid;
    align-content: start;
    padding: var(--spacing) 0;
  }

  label {
    margin: 0 0 calc(var(--spacing) * 2);
    display: grid;
  }

  label span {
    margin-bottom: var(--size-small);
  }

  input {
    padding: calc(var(--spacing) / 2);
    border: var(--border-size) solid var(--gray);
    border-radius: var(--border-radius);
  }

  input:focus,
  input:active {
    border-color: currentColor;
    outline: none;
  }
</style>
