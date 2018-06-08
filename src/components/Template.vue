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
      return this.$store.state.currentTemplate
    }
  },
  mounted() {
    this.$store.commit('getTemplate', this.id)
  },
  methods: {
    deleteTemplate(id) {
      console.log('Delete item -', id)
      // this.$store.dispatch('deleteTemplate', id)
    }
  }
}
</script>
