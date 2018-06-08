<template>
  <div class="notification" :class="type">
    <p>{{ title }}</p>
    <button class="button" @click="clearNotification">Dismiss</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'Notification',
    props: {
      type: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      ...mapMutations([
        'clearNotification'
      ])
    }
  }
</script>

<style scoped>
  .notification {
    display: grid;
    align-items: center;
    grid-template-columns: min-content auto min-content;
  }

  .success {
    background: var(--green);
    color: var(--white);
  }

  .error {
    background: var(--red);
  }

  p {
    grid-column: 2;
    margin: 0;
  }

  button {
    grid-column: 3;
  }
</style>
