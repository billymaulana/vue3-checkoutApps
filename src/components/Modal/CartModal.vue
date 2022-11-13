<script setup lang="ts">
const productStore = useProductStore()
const router = useRouter()
const { cart } = storeToRefs(productStore)
const { inc, dec, deleteCart } = productStore
const goToCheckout = () => {
  showCartModal()
  router.push('/checkout')
}
</script>

<template>
  <div id="defaultModal" tabindex="-1" aria-hidden="true" class="modal-cart md:w-[30%] sm:w-full">
    <div class="relative w-full h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700">
        <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
          <h3 class="text-md font-semibold text-gray-900 dark:text-white">
            Cart
          </h3>
        </div>
        <div class="p-6 space-y-6 h-auto overflow-y-scroll max-h-screen">
          <div v-if="cart.length > 0">
            <div v-for="(item, id) in cart" :key="id">
              <div w-full flex items-center my-2>
                <div>
                  <img :src="item.image" class="w-[80px] h-[80px] object-contain">
                </div>
                <div class="ml-4 w-full">
                  <div class="max-w-[80%]">
                    {{ item.title }}
                  </div>
                  <div>${{ (item.price * item.quantity).toFixed(2) }} </div>
                  <div flex items-center justify-between w-full>
                    <div flex items-center flex-row mt-2>
                      <button class="px-2 bg-dark text-white" @click="dec(item.id)">
                        -
                      </button>
                      <div class="w-full mx-2 px-5">
                        {{ item.quantity }}
                      </div>
                      <button class="px-2 bg-dark text-white" @click="inc(item.id)">
                        +
                      </button>
                    </div>
                    <button @click="deleteCart(item.id)">
                      <i i-mdi:delete-circle inline-flex f-28px text-red />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            No Cart
          </div>
        </div>
        <div class="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
          <a class="text-white btn-primary cursor-pointer" @click="goToCheckout()">
            Checkout
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal-cart{
  position: fixed;
  top:65px;
  height: 100%;
  right: 0px;
  overflow:hidden;
  z-index: 9999;
  padding: 0;
  border-radius: 6px;
  margin: 0;
}
.btn-danger{
  background: red;
  padding: 4px 8px;
  border-radius: 6px;
  color:white;
}
</style>
