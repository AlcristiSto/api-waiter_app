import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
	try {
		const { name, description, price, ingredients, category } = req.body;

		const { filename: imagePath } = req.file || {};

		const newProduct = new Product({
			name,
			description,
			price,
			ingredients: ingredients ? JSON.parse(ingredients) : [],
			category,
			imagePath,
		});

		await newProduct.save();

		res.status(201).json(newProduct);
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
}
