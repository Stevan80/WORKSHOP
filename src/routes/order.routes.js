import { Router } from "express";
import { OrdersController } from "../controllers/order.controller.js";

export const ordersRouterRouter = Router();

ordersRouter.get("/", OrdersController.getAllOrders);
ordersRouter.get("/:id", OrdersController.getOrderById);
ordersRouter.post("/", OrdersController.createOrder);
