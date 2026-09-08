const express=require('express')
const authRouter=express.Router()
const authController=require('../controller/auth.controller')
const authMiddleware=require("../middleware/auth.middleware")


/**
 * @routes POST  /api/auth/register
 * @description Resgister new user
 * @access public
 */

authRouter.post("/register",authController.registerController)
/**
 * @routes
 * @description
 * @access
 */
authRouter.post("/login",authController.loginController)
/**
 * @routes   GET /api/auth/request
 * @description
 * @access public
 */
authRouter.get("/logout",authController.logoutuserController)
/**
 * @routes   GET /api/auth/get-me
 * @description  get current logged inuser deatil
 * @access privatye
 */
authRouter.get("/get-me",authMiddleware.authuser,authController.getmeController)

module.exports=authRouter;