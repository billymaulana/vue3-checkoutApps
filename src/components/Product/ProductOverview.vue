<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div sm="col-12 py-10" lg="py-15 items-center col-6">
    <a href="/" flex item-center>
      <i i-mdi:arrow-left text-gray text-20px self-center />
      <div flex items-center>
        <div font-bold text-white text-center bg-dark rounded-full lh-8 w-8 h-8 mx-2> P </div>
        <div font-bold>Powdur</div>
      </div>
    </a>
    <div v-if="props.product" overview px-9 pt-8>
      <h1 font-medium text-gray>
        {{ props.product.title }}
      </h1>
      <h2 font-bold f-32 text-black>
        ${{ props.product.price }}
      </h2>
      <img :src="props.product.image" width="280" height="300" w-280px h-300px object-contain mx-auto rounded-md lg="my-10" alt="Product Images">
    </div>
  </div>
</template>
