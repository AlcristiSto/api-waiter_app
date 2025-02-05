// implmente

import { model, Schema } from "mongoose";

export const Restaurant = model(
	"Restaurant",
	new Schema({
		name: { type: String, required: true },
		phone: { type: String },
		cnpj: { type: String, required: true },
		address: { type: Schema.Types.ObjectId, ref: "Address" },
		categories_actives: [{ type: Schema.Types.ObjectId, ref: "Category" }],
		user: { type: Schema.Types.ObjectId, ref: "User" },
	})
);
