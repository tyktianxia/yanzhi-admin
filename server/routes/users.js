var express = require("express");
var Mock = require("mockjs");
var router = express.Router();
var utiltest = require("../utils/index");

/* GET users listing. */

router.get("/", function (req, res, next) {
  res.send("用户相关接口");
});

// 获取用户列表
router.get("/userList", function (req, res, next) {
  var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    "list|1-10": [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        "id|+1": 1,
      },
    ],
  });
  res.send(utiltest.normalRes(data));
});

module.exports = router;
