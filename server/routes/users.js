var express = require("express");
var router = express.Router();
var utiltest = require("../utils/index");

/* GET users listing. */

router.get("/", function (req, res, next) {
  res.send("用户相关接口");
});

// 获取用户列表
router.get("/userList", function (req, res, next) {
  res.send(utiltest.normalRes());
});


module.exports = router;
