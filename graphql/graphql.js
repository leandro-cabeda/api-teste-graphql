const { buildSchema } = require("graphql");
const users = require("../usersdao/UsersDAO");

let user={};

const schema = buildSchema(`

  type User {
    id: ID,
    name: String,
    email: String,
    age: Int
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String, age: Int!): User
    deleteUser(id: ID!): User
    updateUser(id: ID!, name: String!, email: String, age: Int!): User
  }

`);

const resolvers = {

 async user({ id }) {

    return await users.getByIdUser(id);

  },

  async users() {

    return await users.getAllUsers();

  },

  async createUser({ name, email, age }) {

    user = {
      name,
      email,
      age
    };

    return await users.saveUser(user);

  },

  async deleteUser({ id }) {

    return await users.deleteUsers(id);

  },

  async updateUser({ id, name, email, age }) {

    user = {
      name,
      email,
      age
    };

    return await users.updateUsers(id, user);

  }


};


module.exports = {
  schema,
  resolvers

};