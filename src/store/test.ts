import { defineStore } from 'pinia'

export const Test = defineStore("test", {
  // 开启数据缓存
  persist: {
    enabled: true
  },
  state: () => {
    return {
      testData:123
    }
  },
})

