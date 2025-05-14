# Vue in Markdown Files

<script setup>
    import CustomButton from "../components/Button/CustomButton.vue";
</script>


[[toc]]

## How to use Vue-Component is VitePress

### Create the Component
To use **Vue Components in Markdown Files**, you first need to create the component. 
Let's say we want a Button-Component with a counter that counts up when the button is clicked.

First, we need to create the component:

_./components/Button/Button.vue_

```vue
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
```

### Add the Component to Markdown

After that, just import the Button-Component in a _script-tag_ like you would normally do
and add the Component to your markdown:

```markdown{2,7}
<script setup>
    import CustomButton from ".components/Button/CustomButton.vue";
</script>

# Counter Button

<CustomButton />
```

### Example Button

With all finished, here is the working Button:

<CustomButton></CustomButton>
