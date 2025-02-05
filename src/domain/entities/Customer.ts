export class Customer {
	id: string;
	name: string;
	email: string;
	phone: string;
	user: string;

	constructor(data: Customer) {
		this.id = data.id;
		this.name = data.name;
		this.email = data.email;
		this.phone = data.phone;
		this.user = data.user;
	}
}
