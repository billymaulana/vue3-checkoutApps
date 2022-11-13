import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IProduct } from 'types'
interface State {
  listProducts: IProduct[]
  product: IProduct
  filteredProducts: IProduct[]
  cart: IProduct[]
  isLoading: boolean
}

const cart = localStorage.getItem('cart')

export const useProductStore = defineStore('product', {
  state: () => ({
    listProducts: [],
    product: null,
    filteredProducts: [],
    cart: cart ? JSON.parse(cart) : [],
    isLoading: true,
  } as unknown as State),

  actions: {
    async fetchAllProducts() {
      const response = await useFetch('/products')
      this.listProducts = await response
      this.isLoading = false
      return response
    },
    async fetchProduct(id: string) {
      const response = await useFetch<IProduct>(`/products/${id}`)
      this.product = await response
      this.isLoading = false
      return response
    },
    addProduct(product: IProduct) {
      const found = this.cart.find(item => item.id === product.id)
      if (!found)
        this.cart.push({ ...product, rating: { count: 1, rate: product.rating.rate } })
      else
        found.rating.count++
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
  },

  getters: {
    getTotalPrice(state) {
      return state.cart.reduce((totalPrice, product) => Math.round(totalPrice += product.price * product.rating.count), 0)
    },
    getQuantityProducts(state) {
      return state.cart.reduce((totalQuantity, product) => totalQuantity += product.rating.count, 0)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
