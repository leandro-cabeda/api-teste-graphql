const Users  = require("../database/Users");

let listUsers = [];
let user = {};

const UsersDAO = {

  getAllUsers: async () => {
      
      Users.findAll({
      raw: true
    })
      .then(users => {
        listUsers= users;
      })
      .catch(err => {
        console.log(err);
      });

    return listUsers;
    
  },

  getByIdUser: async id => {

    Users.findOne({
      where: { id }
    })
      .then(use => {
        user = use;
      })
      .catch(err => {
        console.log(err);
      });

      return user;

  },

  saveUser: async user => {
    
     Users.create({
       name: user.name,
       email: user.email,
       age: user.age
     })
       .then(() => {
         console.log("Create !!");
       })
       .catch(err => {
         console.log(err);
       });

     return user;

  },

  deleteUsers: async id =>{

    await this.getByIdUser(id)
    .then(use=>{
      user=use;
    });

    Users.destroy({
      where: { id }
    })
      .then(() => {
        console.log("Delete!!");
      })
      .catch(err => {
        console.log(err);
      });

    return user;

  },

  updateUsers: async (id, user)=>{

    Users.update(
      {
        name: user.name,
        email: user.email,
        age: user.age
      },
      {
        where: { id }
      }
    )
      .then(() => {
        console.log("Update!!");
      })
      .catch(err => {
        console.log(err);
      });

    return user;

  }


};

module.exports = UsersDAO;
