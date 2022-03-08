import { defineStore } from 'pinia'
import { UserInfo } from "@/types/userInfo"


interface UserStateType {
  userInfo: UserInfo
}

export const userStore = defineStore("userInfo", {
  state: (): UserStateType => {
    return {
      userInfo: {
        name: '123',
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

