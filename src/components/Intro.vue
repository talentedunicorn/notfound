<template>
  <h1 v-text="welcome"/>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      welcome: 'This is notfound, your friendly 404 generator'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
  }
</style>
