var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
	//清空session清空用户信息
	req.session.user=null;

	req.flash('success','退出成功');

	//退出到主页
	res.redirect('/posts');
});

module.exports = router;