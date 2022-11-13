<template>
  <Navbar />
  <Suspense>
    <template #fallback>
      <div h-screen w-screen flex items-center justify-center>
        <Loading />
      </div>
    </template>
    <template #default>
      <main dark:text-white>
        <router-view />
        <CartModal v-if="isCartModal" />
      </main>
    </template>
  </Suspense>
</template>
