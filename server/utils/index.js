

module.exports = {
  normalRes: (data = {}, code = "00000", msg = "操作成功！") => {
    return {
      code: "00000",
      data: {
        code: code,
        data: data,
        message: msg,
        msg,
      },
      message: "",
      msg: "",
    };
  },
  abnormalRes: (code = "50001", msg = "操作失败！") => {
    return {
      code,
      data: null,
      message: msg,
      msg,
    };
  },
};
