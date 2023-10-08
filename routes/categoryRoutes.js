import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController } from "../controllers/categoryController.js";
import { updateCategoryController } from "../controllers/categoryController.js";


const router = express.Router();

//routes
//create category
router.post(
  "/create-category",
  requireSignIn,

  createCategoryController
);

//update category
router.put("/update-category/:id", requireSignIn, updateCategoryController);

//getAll category
router.get('/get-category', categoryController)

//single category
router.get('/single-category/:slug', singleCategoryController)

//delete category
router.delete('/delete-category/:id', requireSignIn, deleteCategoryController)

export default router;
