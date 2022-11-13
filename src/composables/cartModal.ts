/* eslint-disable no-console */
export const isCartModal = ref(false)
export const showCartModal = () => {
  isCartModal.value = !isCartModal.value
  console.log(isCartModal.value)
}
