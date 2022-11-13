<!-- eslint-disable no-alert -->
<!-- eslint-disable no-console -->
<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
const checkoutStore = useCheckoutStore()
const { listCountries } = storeToRefs(checkoutStore)
const router = useRouter()
const data = ref({
  email: '',
  name: '',
  address: '',
  country: '',
  creditCard: {
    number: '',
    expired: '',
    cvc: '',
  },
})

await checkoutStore.fetchAllCountry()

const getCardType = computed(() => {
  const number: string = data.value.creditCard.number
  if (number) {
    let re = /^4/
    if (number?.match(re) != null)
      return 'visa'

    re = /^(34|37)/
    if (number?.match(re) != null)
      return 'amex'

    re = /^5[1-5]/
    if (number?.match(re) != null)
      return 'mastercard'

    re = /^6011/
    if (number?.match(re) != null)
      return 'discover'

    return 'visa'
  }
})

const disableSubmit = computed(() => {
  if (
    data.value.address === '' || data.value.address.trim().length === 0
    || data.value.name === '' || data.value.name.trim().length === 0
    || data.value.email === '' || data.value.email.trim().length === 0
    || data.value.country === '' || data.value.country.trim().length === 0
    || data.value.creditCard.cvc === '' || data.value.creditCard.cvc.trim().length === 0
    || data.value.creditCard.expired === '' || data.value.creditCard.expired.trim().length === 0
    || data.value.creditCard.number === '' || data.value.creditCard.number.trim().length === 0
  )
    return true
  else
    return false
},
)

const handlingCheckout = () => {
  if (disableSubmit.value === false)
    alert('Success')
  console.log('submitted..')
  router.push('/')
}

const applePay = () => {
  console.log('checkout apple pay')
}
</script>

<template>
  <div sm="col-12 pt-10" lg="px-20 pt-24 col-6 shadow-[15px_0_30px_0_rgba(0,0,0,18%)]">
    <button
      text-white
      btn-primary my-4 @click="applePay"
    >
      <i i-mdi:apple inline-flex text-16px mr-1 />Pay
    </button>
    <div flex items-center justify-center relative my-10>
      <hr border-t border-gray h-1px w-full block box-content h-auto>
      <div absolute top--10px z-10 bg-white px-2 text-gray f-14>
        Or pay with card
      </div>
    </div>
    <h3 text-left font-bold mt-10>
      Shipping Information
    </h3>
    <form enctype="multipart/form-data">
      <div my-4>
        <label font-bold text-black>Email</label>
        <input v-model="data.email" type="email" placeholder="Email" class="form-control" required>
      </div>
      <div my-4>
        <label font-bold text-black>Shipping Address</label>
        <div
          class="form-group-merge"
        >
          <div class="relative flex items-center">
            <select id="country" v-model="data.country" name="country" class="w-full outline-none p-2" required>
              <option value="" disabled selected readonly>
                Country
              </option>
              <option v-for="(country, id) in listCountries" :key="id" :value="country?.name">
                {{ country?.name }}
              </option>
            </select>
          </div>
          <input v-model="data.name" type="text" placeholder="Name" class="w-full px-3 py-2 outline-none border-t-width-[1.5px] border-gray-200" required>
          <input v-model="data.address" type="text" placeholder="Address" class="w-full px-3 py-2 outline-none border-t-width-[1.5px] border-gray-200" required>
        </div>
      </div>
      <div>
        <a underline underline-offset-4 f-12 text-gray decoration-gray>Enter Address Manualy</a>
        <h4 text-left font-bold mt-10>
          Payment Details
        </h4>
      </div>
      <div my-4>
        <label font-bold text-black>Card information</label>
        <div class="form-group-merge">
          <div class="relative">
            <input
              v-model="data.creditCard.number"
              v-maska="'#### #### #### ####'"
              type="text"
              placeholder="1234 1234 1234 1234"
              maxlength="19"
              class="w-full px-3 py-2 outline-none"
              required
            >
            <div class="absolute top-[5px] right-[5px] flex flex-row items-center">
              <object class="visa mx-1">
                <img
                  src="@/assets/images/visa-logo.svg"
                  class="w-6 h-4 object-contain"
                  :class="getCardType === 'visa' ? '' : 'grayscale'"
                  alt="Visa Logo"
                >
              </object>
              <object class="mastercard mx-1">
                <img
                  src="@/assets/images/mastercard-logo.svg"
                  class="w-6 h-4 object-contain"
                  :class="getCardType === 'mastercard' ? '' : 'grayscale'"
                  alt="Mastercard logo"
                >
              </object>
              <object class="amex mx-1">
                <img
                  src="@/assets/images/amex-logo.svg" class="w-6 h-4 object-contain"
                  :class="getCardType === 'amex' ? '' : 'grayscale'"
                  alt="Amex Logo"
                >
              </object>
              <object class="discover mx-1">
                <img
                  src="@/assets/images/discover-logo.svg"
                  :class="getCardType === 'discover' ? '' : 'grayscale'"
                  class="w-6 h-4 object-contain" alt="discover Logo"
                >
              </object>
            </div>
          </div>
          <div class="flex flex-row border-t-width-[1.5px] border-gray-200">
            <input
              v-model="data.creditCard.expired"
              v-maska="'##/##'"
              type="text"
              placeholder="MM/YY"
              maxlength="5"
              class="w-full px-3 py-2 outline-none border-r-width-[1.5px] border-gray-200"
              required
            >
            <div class="w-full relative flex items-center">
              <input
                v-model="data.creditCard.cvc"
                v-maska="'####'"
                type="text"
                placeholder="CVC"
                class="w-full px-3 py-2 outline-none"
                maxlength="4"
                required
              >
              <div class="cvc-icon absolute right-0 mr-2">
                <svg class="h-[16px]" opacity="100" focusable="false" viewBox="0 0 32 21" role="img" aria-label="CVC"><title>CVC</title><g fill="none" fill-rule="evenodd"><g class="fill-[#565656]"><g transform="translate(0 2)"><path d="M21.68 0H2c-.92 0-2 1.06-2 2v15c0 .94 1.08 2 2 2h25c.92 0 2-1.06 2-2V9.47a5.98 5.98 0 0 1-3 1.45V11c0 .66-.36 1-1 1H3c-.64 0-1-.34-1-1v-1c0-.66.36-1 1-1h17.53a5.98 5.98 0 0 1 1.15-9z" opacity="20" /><path d="M19.34 3H0v3h19.08a6.04 6.04 0 0 1 .26-3z" opacity="30" /></g><g transform="translate(18)"><path d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14zM4.22 4.1h-.79l-1.93.98v1l1.53-.8V9.9h1.2V4.1zm2.3.8c.57 0 .97.32.97.78 0 .5-.47.85-1.15.85h-.3v.85h.36c.72 0 1.21.36 1.21.88 0 .5-.48.84-1.16.84-.5 0-1-.16-1.52-.47v1c.56.24 1.12.37 1.67.37 1.31 0 2.21-.67 2.21-1.64 0-.68-.42-1.23-1.12-1.45.6-.2.99-.73.99-1.33C8.68 4.64 7.85 4 6.65 4a4 4 0 0 0-1.57.34v.98c.48-.27.97-.42 1.44-.42zm4.32 2.18c.73 0 1.24.43 1.24.99 0 .59-.51 1-1.24 1-.44 0-.9-.14-1.37-.43v1.03c.49.22.99.33 1.48.33.26 0 .5-.04.73-.1.52-.85.82-1.83.82-2.88l-.02-.42a2.3 2.3 0 0 0-1.23-.32c-.18 0-.37.01-.57.04v-1.3h1.44a5.62 5.62 0 0 0-.46-.92H9.64v3.15c.4-.1.8-.17 1.2-.17z" /></g></g></g></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div my-4 flex items-center space-x-2>
        <input id="sameAddress" type="checkbox" name="sameAddress" class="w-4 h-4 p-0  m-0 bg-white">
        <label for="sameAddress" class="text-black font-semibold m-0">Billing address is same as shipping</label>
      </div>
    </form>
    <button :disabled="disableSubmit" :class="disableSubmit ? 'text-gray' : 'text-white'" class="btn-primary mt-10" @click.prevent="handlingCheckout">
      Pay ${{ props?.product?.price }}
    </button>
  </div>
</template>
