export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
export interface ICountry {
  name: 'string'
}

export interface ICart {
  id: number
  image: string
  title: string
  description: string
  rating: {
    rate: number
    count: number
  }
  price: number
  quantity: number
}
