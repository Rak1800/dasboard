const { register, login, getrefreIdChild } = require("../Controllers/userController");

const router= require("express").Router();

router.post("/register",register)
router.post("/login",login)

router.get("/child/:myId",getrefreIdChild)

module.exports=router 