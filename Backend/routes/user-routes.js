const express=require('express');
const {signup, getUser, refreshToken}=require("../controllers/user-controller")
const {login}=require("../controllers/user-controller")
const {verifyToken}=require("../controllers/user-controller")
const router=express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.get("/user",verifyToken,getUser)
router.get("/refresh",refreshToken,verifyToken,getUser)


module.exports=router;