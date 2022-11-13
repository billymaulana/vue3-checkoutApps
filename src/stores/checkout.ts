import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ICountry } from '../../types'
export const useCheckoutStore = defineStore('checkout', () => {
  const listCountries = ref()
  const listCountriesStorage = localStorage.getItem('country')
  if (listCountriesStorage)
    listCountries.value = listCountriesStorage

  async function fetchAllCountry() {
    if (!listCountriesStorage) {
      const response = useFetch<ICountry>('https://restcountries.com/v2/all?fields=name', {
      })
      listCountries.value = await response
      localStorage.setItem('country', JSON.stringify(listCountries.value))
      return response
    }
    else {
      listCountries.value = JSON.parse(listCountriesStorage)
      return listCountriesStorage
    }
  }
  return {
    listCountries,
    fetchAllCountry,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCheckoutStore, import.meta.hot))
