// implmente

import { model, Schema } from "mongoose";
import { UserType } from "../../utils/enum";

export const User = model(
	"User",
	new Schema({
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		type: {
			type: String,
			enum: Object.keys(UserType),
		},
		created_at: { type: Date, default: Date.now },
	})
);
