import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function deleteOrder(req: Request, res: Response) {
	try {
		const { id } = req.params;

		await Order.findByIdAndDelete(id);

		res.status(204);
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
}
