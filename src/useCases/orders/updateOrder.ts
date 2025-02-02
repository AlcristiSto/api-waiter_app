import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function updateOrder(req: Request, res: Response) {
	try {
		const { status } = req.body;

		const { id } = req.params;

		if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
			res.status(400).json({ message: "Invalid status" });
		}

		await Order.findByIdAndUpdate(id, { status });

		res.status(204);
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
}
