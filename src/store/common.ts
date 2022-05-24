import { defineStore } from 'pinia'
import { UserInfo } from "@/types/userInfo"


interface UserStateType {
  userInfo: UserInfo
}

export const userStore = defineStore("common", {
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'yanzhi_common',
        storage: localStorage,
      }
    ]
  },
  state: (): UserStateType => {
    return {
      userInfo: {
        name: '',
        id: "",
        tokenStr: "",
      }
    }
  },
  getters: {
    getTokenStr: (state) => state.userInfo.tokenStr,
  },
  actions: {
    setTokenStr(tokenStr: string) {
      this.userInfo.tokenStr = tokenStr;
    },
    setUserInfo(info: UserInfo) {
      this.userInfo = info;
    }
  }
})

