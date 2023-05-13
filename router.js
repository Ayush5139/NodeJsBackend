
const { login, register, verify, bollywood } = require("./register")

const route = require("express").Router();

route.post("/login",login)
route.post("/reg",register)
// route.get("/ver",verify)
route.get("/verify",verify,bollywood)
route.get("/boll",bollywood)

module.exports = route 
