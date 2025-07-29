import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDataStore = defineStore('counter', {
  state: () => {
    return {
      count: []
    }
  },
  actions: {
    increment() {
      this.count.pop()
    },
  },
})
