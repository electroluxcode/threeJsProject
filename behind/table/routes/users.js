var express = require('express');
var router = express.Router();
const models = require('../models')
var Op = models.Sequelize.Op
/* GET users listing. */
// 路由级别中间件 （记得要在app.js里面挂载到应用级别中间件上）
router.get('/', async function (req, res, next) {
  const userInfo = await models.User.findAll({
    where: {
      username: req.query.username ? req.query.username : '',
      password: req.query.password ? req.query.password : ''
    }
  })
  if (userInfo.length > 0) {
    res.send({
      errorno: 0,
      errormsg: '',
      userinfo: userInfo
    })
  } else {
    res.send({
      errorno: -1,
      errormsg: 'error'
    })
  }
});

router.post("/", async (req, res, next) => {
  // const {username,password} = req.body
  const users = await models.User.create({
    username: req.body.username,
    password: req.body.password
  })
  res.send({
    errorno: 0,
    errormsg: '',
    userinfo: users
  })
})

router.get("/getusers", async (req, res, next) => {
  const userinfo = await models.User.findAll({
  })
  // const userinfo = await models.User.find("username")
  res.json({ userinfo })
})

router.get('/search', async function (req, res, next) {
  // 搜索
  var where = {};

  // 模糊查询标题
  var username = req.query.username;
  if (username) {
    where.username = {
      [Op.like]: '%' + username + '%'
    }
  }
  var users = await models.User.findAll({
    where: where
  });
  res.json({
    errorno: 0,
    errormsg: '',
    userinfo: users
  });
})

router.delete('/:id', async (req, res, next) => {
  const user = await models.User.findByPk(req.params.id)
  user.destroy()
  res.json({ msg: "delete success", errorno: 0 })
})
module.exports = router;
