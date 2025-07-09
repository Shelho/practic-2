import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDataStore = defineStore('counter', {
  state: () => {
    return { count: '0' }
  },
  actions: {
    increment() {
      this.count.pop()
    },
  },
})
