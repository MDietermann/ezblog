<script setup lang="ts">
  import { ref } from 'vue';
  const counter = ref(0)
</script>

<template>
  <button @click="counter++">Click me</button>
  <br/>
  {{ counter }}
</template>

<style scoped>
  button {
    border: cadetblue 1px solid;
    border-radius: 4px;
    padding: 8px;
  }
</style>