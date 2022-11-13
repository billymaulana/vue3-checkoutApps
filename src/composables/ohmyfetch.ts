/* eslint-disable no-console */
import { $fetch } from 'ohmyfetch'

export const useFetch = $fetch.create({
  // baseURL: 'https://fakestoreapi.com',
  baseURL: '/api',
  async onRequest({ request }) {
    console.log('fetch request', request)
  },
  async onRequestError({ request, error }) {
    console.log('fetch request error', request, error)
  },
  async onResponse({ response }) {
    console.log('fetch response', response.status, response._data)
  },
  async onResponseError({ request, response, options }) {
    console.log('fetch response error', request, response.status, response.body, options)
  },
})
