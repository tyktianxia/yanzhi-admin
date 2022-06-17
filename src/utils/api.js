const apis = {
  detailUrl: {
    login: "/users/login",
    getUserList: "/users/findAll",
    addUser: "/users/addUser",
    deleteUser: "/users/delete",
  },
  // baseUrl: "http://10.10.0.100:8888",
  baseUrl: "http://tyktianxia.top:8888",
};

export const getApiUrl = (urlName) => {
  let path = apis.baseUrl + apis.detailUrl[urlName];
  console.log("axios url:", path)
  return path
};

 