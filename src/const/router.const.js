import { Router } from "express";
import { ordersRouter } from "../routes/order.routes.js";
import { productsRouter } from "../routes/product.routes.js";

export const globalRouter = Router();

globalRouter.use("/order", ordersRouter);
globalRouter.use("/product", productsRouter);
