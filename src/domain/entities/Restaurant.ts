export class Restaurant {
	id: string;
	name: string;
	phone: string;
	cnpj: string;
	address: string;
	categories_actives: string[];
	user: string;

	constructor(data: Restaurant) {
		this.id = data.id;
		this.name = data.name;
		this.phone = data.phone;
		this.cnpj = data.cnpj;
		this.address = data.address;
		this.categories_actives = data.categories_actives;
		this.user = data.user;
	}
}
