import { model, Schema } from "mongoose";

export const Order = model(
	"Order",
	new Schema({
		table: { type: String, required: true },
		status: {
			type: String,
			enum: ["WAITING", "IN_PRODUCTION", "DONE"],
			default: "WAITING",
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
	})
);
