import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";

export const productsRouter = Router();

productsRouter.get("/", ProductController.getAllProduct);
productsRouter.get("/:id", ProductController.getProductById);
productsRouter.post("/", ProductController.createProduct);
productsRouter.patch("/:id", ProductController.updateProduct);
productsRouter.delete("/:id", ProductController.deleteProduct);
