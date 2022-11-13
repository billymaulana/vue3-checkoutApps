<template>
  <Suspense>
    <template #fallback>
      <div h-screen w-screen flex items-center justify-center>
        <Loading />
      </div>
    </template>
    <template #default>
      <main dark:text-white>
        <router-view />
      </main>
    </template>
  </Suspense>
</template>
