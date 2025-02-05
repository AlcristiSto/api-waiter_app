// implmente

import { model, Schema } from "mongoose";

export const Customer = model(
	"Customer",
	new Schema({
		name: { type: String, required: true },
		birthDate: { type: Date },
		phone: { type: String },
		address: [{ type: Schema.Types.ObjectId, ref: "Address" }],
		address_active: { type: Schema.Types.ObjectId, ref: "Address" },
		user: { type: Schema.Types.ObjectId, ref: "User" },
	})
);
