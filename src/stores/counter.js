import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({

    name : "bo than",
    counter: "than htike aung",
    data : ["a","b","c","d","e"],
    array : []
  }),
  getters: {
    doubleCount: (state) => state.counter.toUpperCase(),
    addArray : (state) => state.data.join(" ")
  },
  actions: {
    increment() {
      // this.name.toUpperCase();
      this.name = this.name.toUpperCase();
      console.log(this.name.toUpperCase())
    }
  }
})
