import { UserType } from "../../utils/enum";

export class User {
	public id: string;
	public email: string;
	private password: string;
	public type: keyof typeof UserType;
	public created_at: Date;

	constructor(data: User) {
		this.id = data.id || "";
		this.email = data.email;
		this.password = data.password;
		this.type = data.type;
		this.created_at = data.created_at;
	}
}
