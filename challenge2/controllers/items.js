const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    res.render("index");
  },

  addToCart: function(req, res){
    res.redirect('/')
  }
}
