const app = require("express")();
const expressGraphqlHttp = require("express-graphql");
const { schema, resolvers} = require("../graphql/graphql");


app.use(
  "/graphql",
  expressGraphqlHttp({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);


app.get("/", (req, res) => {

  res.status(200).send("<h2>Seja bem vindo a API</h2>");
  
});


module.exports=app;
