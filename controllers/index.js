const utils = require("../helpers/utils");

async function home(req, res) {
  console.log(req.user);
  res.json("backend");
}
async function main(req, res) {
  res.json("/main");
}

module.exports = {
  render: {
    home,
    main,
  },
  get: {},
  post: {},
};
