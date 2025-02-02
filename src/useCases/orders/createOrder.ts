import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function createOrder(req: Request, res: Response) {
	try {
		const { table, products } = req.body;

		const newOrder = new Order({
			table,
			products,
		});
		await newOrder.save();

		res.status(201).json(newOrder);
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
}
