import type { IProduct from '~/types';
<script setup lang="ts">
const productStore = useProductStore()
const { id } = useRoute().params
const { product } = storeToRefs(productStore)

if (typeof id === 'string')
  await productStore.fetchProduct(id)
</script>

<template>
  <section>
    <div sm="container max-w-screen-sm" lg="container max-w-[80%] w-full min-h-screen h-full overflow-hidden" text="text-black dark:text-gray-200">
      <div row min-h-screen overflow-hidden>
        <ProductOverview :product="product" />
        <ProductSummary :product="product" />
      </div>
    </div>
  </section>
</template>
