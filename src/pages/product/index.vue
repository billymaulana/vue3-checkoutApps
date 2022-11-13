<script setup lang="ts">
const productStore = useProductStore()
const { listProducts } = storeToRefs(productStore)
await productStore.fetchAllProducts()
</script>

<template>
  <section v-if="listProducts.length > 0" py-5>
    <div lg="container w-full min-h-screen h-full overflow-hidden" text="text-black dark:text-gray-200">
      <CardProduct :products="listProducts" />
    </div>
  </section>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
