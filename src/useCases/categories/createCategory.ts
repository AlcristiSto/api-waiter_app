import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function createCategory(req: Request, res: Response) {
	try {
		const { name, icon } = req.body;

		if (!name) {
			res.status(400).json({ message: "Name is required" });
		}

		if (!icon) {
			res.status(400).json({ message: "Icon is required" });
		}

		const newCategory = new Category({ name, icon });
		await newCategory.save();

		res.status(201).json(newCategory);
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
}
