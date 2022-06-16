import { defineStore } from "pinia";
import { UserInfo } from "@/types/userInfo";


interface UserStateType {
  userInfo: UserInfo
}

export const Common = defineStore("common", {
  state: (): UserStateType => {
    return {
      userInfo: {
        name: "",
        id: "",
        tokenStr: "",
      },
    };
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
          key: "common",
          storage: localStorage,
      },
    ],
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
    },
  },
});

