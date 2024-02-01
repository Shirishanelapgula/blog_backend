import express from "express";
import Authcontroller from "../controllers/authController.js";
import BlogController from "../controllers/blogController.js";
import CategoryController from "../controllers/categoryController.js";
import checkIsUserAuthenticated from "../middlewares/authMiddle.js"

import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,`public/upload/`);
    },
    filename: function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    },
})

const upload = multer({storage:storage})

const authRoutes = express.Router();

authRoutes.post("/user/register",Authcontroller.userRegistration);
authRoutes.post("/user/login",Authcontroller.userLogin);


authRoutes.get("/get/allblogs",checkIsUserAuthenticated,BlogController.getAllBlogs);
authRoutes.post("/add/blog", checkIsUserAuthenticated, upload.single("thumbnail"), BlogController.addNewBlog);
authRoutes.get("/get/blog/:id",checkIsUserAuthenticated, BlogController.getSingleBlog)


authRoutes.get("/get/categories", checkIsUserAuthenticated ,CategoryController.getAllCategories);
authRoutes.post("/add/category", checkIsUserAuthenticated, CategoryController.addNewCategory);


export default authRoutes;