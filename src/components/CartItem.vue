<script setup>
defineProps({
  name: String,
  price: Number
})
</script>

<template>
  <div>
    <h3>{{ name }}</h3>

    <p>₹{{ price }}</p>
  </div>
</template>