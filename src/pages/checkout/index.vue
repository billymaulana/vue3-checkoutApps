import type { IProduct from '~/types';
<script setup lang="ts">
const productStore = useProductStore()
const { cart } = storeToRefs(productStore)
</script>

<template>
  <section>
    <div sm="container max-w-screen-sm" lg="container max-w-[80%] w-full min-h-screen h-full overflow-hidden" text="text-black dark:text-gray-200">
      <div row min-h-screen overflow-hidden>
        <ProductOverview :product="cart" />
        <ProductSummary :product="cart" />
      </div>
    </div>
  </section>
</template>
