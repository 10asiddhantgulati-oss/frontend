<script setup>
import { ref, computed } from 'vue'

const products = ref([
  {
    id: 1,
    name: 'Ericsson Router',
    quantity: 0
  },
  {
    id: 2,
    name: 'Ericsson Radio',
    quantity: 0
  },
  {
    id: 3,
    name: 'Ericsson Analytics',
    quantity: 0
  }
])

function increase(product) {
  product.quantity++
}

function decrease(product) {
  if (product.quantity > 0) {
    product.quantity--
  }
}

const totalItems = computed(() => {
  return products.value.reduce(
    (sum, product) => sum + product.quantity,
    0
  )
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white p-10">

    <img
      src="/logo.svg"
      class="h-12 mb-6"
      alt="Ericsson Logo"
    />

    <h1 class="text-4xl font-bold mb-8">
      Ericsson Services Dashboard
    </h1>

    <div class="grid grid-cols-3 gap-6">

      <div
        v-for="product in products"
        :key="product.id"
        class="bg-slate-900 p-6 rounded-xl shadow-lg"
      >

        <h2 class="text-xl font-semibold mb-4">
          {{ product.name }}
        </h2>

        <div class="flex items-center gap-4">

          <button
            @click="decrease(product)"
            class="bg-red-600 px-4 py-2 rounded"
          >
            -
          </button>

          <span class="text-2xl">
            {{ product.quantity }}
          </span>

          <button
            @click="increase(product)"
            class="bg-green-600 px-4 py-2 rounded"
          >
            +
          </button>

        </div>

      </div>

    </div>

    <div class="mt-10 bg-slate-900 p-6 rounded-xl">

      <h2 class="text-2xl font-bold">
        Cart Total: {{ totalItems }} Items
      </h2>

      <router-link to="/cart">
        <button
          class="mt-4 bg-blue-600 px-6 py-3 rounded-lg"
        >
          Go To Cart
        </button>
      </router-link>

    </div>

  </div>
</template>