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

    <button>Add To Cart</button>
  </div>
</template>