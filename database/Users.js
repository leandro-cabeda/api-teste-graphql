const { connection, Sequelize } = require("./database");

const Users = connection.define("users", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: true
  },

  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

});

Users.sync({force:false});

module.exports=Users; 