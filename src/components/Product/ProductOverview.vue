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
      <div v-if="props.product.length > 1">
        <div v-for="(item, idx) in props.product" :key="idx">
          <div w-full shadow-md my-4 rounded-md>
            <div flex items-center justify-start p-2 w-full>
              <div px-4>
                <img :src="item.image" width="40" height="40" w-80px h-80px object-contain mx-auto rounded-md lg="my-10" alt="Product Images">
              </div>
              <div px-4 w-full>
                <h1 font-medium text-black class="max-w-[80%]">
                  {{ item.title }}
                </h1>
                <div flex items-center w-full justify-between>
                  <div text-gray>
                    Qty:{{ item.quantity }}
                  </div>
                  <div font-bold f-18 text-black ml-4>
                    ${{ (item.price * item.quantity).toFixed(2) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-for="(item, idx) in props.product" :key="idx">
          <h1 font-medium text-gray>
            {{ item.title }}
          </h1>
          <h2 font-bold f-32 text-black>
            ${{ item.price }}
          </h2>
          <img :src="item.image" width="280" height="300" w-280px h-300px object-contain mx-auto rounded-md lg="my-10" alt="Product Images">
          <div text-gray text-center>
            Qty:{{ item.quantity }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
