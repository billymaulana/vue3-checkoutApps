/* eslint-disable no-console */
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ICart, IProduct } from 'types'
interface State {
  listProducts: IProduct[]
  product: IProduct
  filteredProducts: IProduct[]
  cart: ICart[]
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
    addCart(product: IProduct) {
      const myCart = this.cart.find(item => item.id === product.id)
      if (!myCart)
        this.cart.push({ ...product, quantity: 1 })
      else
        myCart.quantity++
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    deleteCart(id: number) {
      this.cart = this.cart.filter(e => e.id !== id)
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    inc(id: number) {
      console.log(id)
      const myCart: any = this.cart.find(item => item.id === id)
      // eslint-disable-next-line curly
      if (this.cart) {
        myCart.quantity++
      }
      localStorage.setItem('cart', JSON.stringify(myCart))
    },

    dec(id: number) {
      console.log(id)
      const myCart: any = this.cart.find(item => item.id === id)
      if (this.cart) {
        if (myCart.quantity > 1) {
          myCart.quantity--
          localStorage.setItem('cart', JSON.stringify(myCart))
        }
        else { this.deleteCart(id) }
      }
    },
  },

  getters: {
    getTotalPrice(state) {
      return state.cart.reduce((totalPrice, product) => (totalPrice += product.price * product.quantity), 0)
    },
    getQuantityProducts(state) {
      return state.cart.reduce((totalQuantity, product) => totalQuantity += product.quantity, 0)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
