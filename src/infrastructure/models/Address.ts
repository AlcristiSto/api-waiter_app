// implmente

import { model, Schema } from "mongoose";

export const Address = model(
	"Address",
	new Schema({
		cep: { type: String, required: true },
		neighborhood: { type: String, required: true },
		street: { type: String, required: true },
		number: { type: String, required: true },
		city: { type: String, required: true },
		complement: { type: String },
	})
);
