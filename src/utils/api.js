const apis = {
  detailUrl: {
    getUserList: "/users/findAll",
    addUser: "/users/addUser",
  },
  baseUrl: "http://10.10.0.100:8888",
};

export const getApiUrl = (urlName) => {
  let path = apis.baseUrl + apis.detailUrl[urlName];
  console.log("axios url:", path)
  return path
};


 