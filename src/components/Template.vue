<template>
  <div>
    <Header :title="template.title" back="/catalog" />
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
  }
}
</script>
