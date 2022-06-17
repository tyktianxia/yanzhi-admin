import { defineStore } from 'pinia'

export const Test = defineStore('test', {
  // 开启数据缓存
  persist: {
    enabled: true,
  },
  state: () => ({
    testData: 123,
  }),
})
