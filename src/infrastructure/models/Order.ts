import { model, Schema } from "mongoose";
import { OrderStatus, PaymentType } from "../../utils/enum";

export const Order = model(
	"Order",
	new Schema({
		table: { type: String, required: true },
		status: {
			type: String,
			enum: Object.keys(OrderStatus),
			default: OrderStatus.WAITING,
		},
		created_at: { type: Date, default: Date.now },
		products: {
			type: [
				{
					product: {
						type: Schema.Types.ObjectId,
						ref: "Product",
						required: true,
					},
					quantity: Number,
				},
			],
			required: true,
		},
		total: { type: Number, required: true },
		restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
		customer: { type: Schema.Types.ObjectId, ref: "Customer" },
		payment_type: {
			type: String,
			enum: Object.keys(PaymentType),
		},
	})
);
