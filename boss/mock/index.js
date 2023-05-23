
const company = require("./modules/company");
const condition = require("./modules/condition");

const modules = [...company, ...condition];

module.exports = function (app) {
  modules.forEach((config) => {
    // 搭建路由
    app[config.method](config.url, (req, res) => {
      res.json(config.response);
    });
  });
};

const position = require('./module/position')
const mock = [...position]
module.exports = function (app) {
  mock.forEach((config) => {
    app[config.method](config.url, (req, res) => {
      res.json(config.data)
    })
  })
}

