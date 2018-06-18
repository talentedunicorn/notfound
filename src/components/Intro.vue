<template>
  <section>
    <h1><span>{{ title }}</span>&#32;<span>{{ subtitle }}</span></h1>
    <router-link class="button" to="/catalog">{{ buttonLabel }}</router-link>
  </section>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      title: 'notfound',
      subtitle: 'Your friendly 404 generator',
      buttonLabel: 'Get started'
    }
  }
}
</script>

<style scoped>
  section {
    align-self: center;
    text-align: center;
  }

  h1 span {
    display: block;
  }

  h1 span:first-of-type {
    color: var(--gray);
  }

  h1 span:last-of-type {
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    font-size: 0.8rem;
    margin-top: var(--spacing);
  }

  .button {
    margin-top: var(--spacing);
    text-transform: uppercase;
    letter-spacing: 0.125rem;
  }
</style>
