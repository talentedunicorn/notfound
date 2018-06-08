<template>
  <div class="page">
    <Header :title="template.title" back="/catalog" />
    <p>This template is not ready to use</p>

    <button class="button" @click="deleteTemplate(template._id)">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'Template',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    template() {
      return this.$store.state.templates.filter(template => template._id === this.id)[0]
    }
  },
  methods: {
    deleteTemplate(id) {
      this.$store.dispatch('deleteTemplate', id)
      this.$router.replace({ name: 'catalog' }) // Navigate back to catalog
    }
  }
}
</script>
