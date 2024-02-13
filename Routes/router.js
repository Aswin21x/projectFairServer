const express = require('express')
const userController = require('../Controllers/userController')
const projectConroller = require('../Controllers/projectController')
const router = new express.Router()
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

//register api
router.post('/register',userController.register) 

//login api
router.post('/login',userController.login) 

//Add project Api - router specific middleware
router.post('/add-project', jwtMiddleware,multerConfig.single('projectImage'), projectConroller.addProject)

//Add home pro Api  
router.get('/get-home-projects',projectConroller.getHomeProject)

//Add all  proApi router specific middleware
router.get('/get-all-projects',jwtMiddleware,projectConroller.getAllProject)

//Add user Api router specific middleware
router.get('/get-user-projects',jwtMiddleware,projectConroller.getUserProject)



//updateproject
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single("profileImage"),projectConroller.editProject)

//remove user
router.delete('/remove-project/:pid',jwtMiddleware,projectConroller.removeProject)





//update user
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)


//exporting router
module.exports = router
