import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ICountry } from '../../types'

interface State {
  listCountries: ICountry[]
}

const listCountriesStorage = localStorage.getItem('country')
export const useCheckoutStore = defineStore('checkout', {
  state: () => ({
    listCountries: [],
  } as unknown as State),
  actions: {
    async fetchAllCountry() {
      if (!listCountriesStorage) {
        const response = useFetch('https://restcountries.com/v2/all?fields=name')
        this.listCountries = await response
        localStorage.setItem('country', JSON.stringify(this.listCountries))
        return response
      }
      else {
        this.listCountries = JSON.parse(listCountriesStorage)
      }
    },
  },
  getters: {},
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCheckoutStore, import.meta.hot))
