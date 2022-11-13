<!-- eslint-disable no-console -->
<script setup lang="ts">
const productStore = useProductStore()
const { cart } = storeToRefs(productStore)
</script>

<template>
  <header fixed top-0 left-0 z-99 bg-white shadow-md flex justify-between w-full py-4 dark="bg-darksecondary" sm="px-5" lg="px-20">
    <Logo />
    <div sm="hidden" md="block w-100 text-center">
      <input type="search" placeholder="Search Product..." w-full rounded-0 bg-transparent outline-0 dark="bg-darksecondary text-white" border="b-width-[1px] border-gray">
    </div>
    <nav flex items-center w-auto>
      <button flex items-center mr-4 @click="toggleDark()">
        <i i-mdi:theme-light-dark text-black dark:text-light f-20 />
      </button>
      <button
        flex items-center cursor-pointer z-8
        @click="showCartModal()"
      >
        <i i-mdi:cart-variant text-black dark:text-light f-20 block />
        <span self-start rounded-full text-center bg-black dark:bg-gray z-1 font-bold w-4 h-4 lh-4 f-9 text-white ml--2>{{ cart.length }}</span>
      </button>
    </nav>
  </header>
</template>
