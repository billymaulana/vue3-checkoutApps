<template>
  <div>
    <nav text-xl inline-flex gap-2>
      <button icon-btn @click="toggleDark()">
        <div dark:i-carbon-moon i-carbon-sun />
      </button>
    </nav>
  </div>
</template>
