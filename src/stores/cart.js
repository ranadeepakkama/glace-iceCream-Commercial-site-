import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
  state:() => ({
    item:{}
  }),
  actions:{
    addToCart(product){
      this.item = product
    },
    clearCart(){
      this.item = {}
    }
  }
})