<template>
  <div>
    <h1>loading...</h1>
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style scoped>
  div {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--gray);
    display: grid;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin: 0;
  }
</style>
