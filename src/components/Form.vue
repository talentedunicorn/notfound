<template>
  <form>
    <label>
      <span>Name</span>
      <input v-model.trim="name" type="text"/>
    </label>

    <label>
      <span>Slug</span>
      <input v-model="slug" disabled="true" type="text"/>
    </label>

    <button class="button" @click.prevent="handleSubmit">Save</button>
  </form>
</template>

<script>
  export default {
    name: 'Form',
    data() {
      return {
        name: ''
      }
    },
    computed: {
      slug() {
        return this.name
          .replace(/(\ )/g, '-')
          .replace(/[^a-zA-Z0-9-]/g, '')
          .toLowerCase()
      }
    },
    methods: {
      handleSubmit() {
        if (this.name.length > 0 && this.slug.length > 0) {
          console.log('Saving template', {
            name: this.name,
            slug: this.slug
          })
        }
      }
    }
  }
</script>

<style scoped>
  form {
    display: grid;
    align-content: start;
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
