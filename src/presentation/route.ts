// list categories

import { Router } from "express";
import { listCategories } from "./useCases/categories/listCategories";
import { createCategory } from "./useCases/categories/createCategory";
import { listProducts } from "./useCases/products/listProducts";
import { createProduct } from "./useCases/products/createProduct";
import multer from "multer";
import path from "node:path";
import { listProductsByCategory } from "./useCases/categories/listProductsByCategory";
import { listOrders } from "./useCases/orders/listOrders";
import { createOrder } from "./useCases/orders/createOrder";
import { updateOrder } from "./useCases/orders/updateOrder";
import { deleteOrder } from "./useCases/orders/deleteOrder";

//Create category

//List products

//Create product

// Get procuts by categories

//list orders

//Create order

//Update order status

//Delete order

export const router = Router();

const upload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, path.resolve(__dirname, "..", "uploads"));
		},
		filename: (req, file, cb) => {
			cb(null, `${Date.now()}-${file.originalname}`);
		},
	}),
});

router.get("/categories", listCategories);

router.post("/categories", createCategory);

router.get("/products", listProducts);

router.post("/products", upload.single("image"), createProduct);

router.get("/categories/:categoryId/products", listProductsByCategory);

router.get("/orders", listOrders);

router.post("/orders", createOrder);

router.patch("/orders/:id", updateOrder);

router.delete("/orders/:id", deleteOrder);
