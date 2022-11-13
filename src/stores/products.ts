import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IProduct } from 'types'
export const useProductStore = defineStore('product', () => {
  const product = ref({})
  const listProducts = ref([])

  async function fetchAllProducts() {
    const response = await useFetch('/products')
    listProducts.value = await response
    return response
  }
  async function fetchProduct(id: string) {
    const response = await useFetch<IProduct>(`/products/${id}`)
    product.value = await response
    return response
  }
  return {
    listProducts,
    product,
    fetchAllProducts,
    fetchProduct,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
