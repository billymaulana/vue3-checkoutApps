<script lang="ts" setup>
import type { IProduct } from 'types'

const props = defineProps({
  products: {
    type: Array<IProduct>,
  },
})
const { addCart } = useProductStore()
</script>

<template>
  <div row justfy-center min-h-screen overflow-hidden px-5 mx-auto lg="pt-24" sm="pt-15">
    <div v-for="(product, id) in props.products" :key="id" sm="col-12" md="col-6 flex grow-1" lg="col-3 flex grow-1">
      <a w-full my-3 mx-2 p-4 flex flex-col justify-between shadow-md rounded-4 dark="bg-darksecondary">
        <div>
          <img :src="product.image" loading="lazy" width="200" height="200" w-200px h-200px object-contain mx-auto sm="my-5" lg="my-10" alt="Product Images">
          <div class="max-w-[80%] font-bold" text-gray>
            {{ product.title }}
          </div>
          <div font-extrabold f-26 my-1>
            ${{ product.price }}
          </div>
          <div f-10 capitalize my-1 rounded-4 bg-lightgray text="gray" text-center px-2 py-1 whitespace-nowrap inline-flex>
            {{ product.category }}
          </div>
        </div>
        <div py-2>
          <div justify-between flex items-center f-14 text-gray>
            <div flex items-center>
              <div inline-flex mr-1>
                <i i-mdi:package-variant-closed text-gray inline-flex />
                <span f-14 text-gray ml-1>{{ product.rating.count }}</span>
              </div>
              <div inline-flex>
                <i i-mdi:star bg-yellow inline-flex f-18 />
                <span f-14 text-gray ml-1>{{ product.rating.rate }}</span>
              </div>
            </div>
            <button text-white bg-dark py-1 px-4 rounded-4 f-14 flex items-center @click="addCart(product)">
              <i i-mdi-cart-plus inline-flex /><span ml-1 font-bold />Add Cart
            </button>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
