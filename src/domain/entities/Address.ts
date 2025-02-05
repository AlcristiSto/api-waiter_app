export class Adress {
	public cep: string;
	public neighborhood: string;
	public street: string;
	public number: string;
	public city: string;
	public complement: string;

	constructor(data: Adress) {
		this.cep = data.cep;
		this.neighborhood = data.neighborhood;
		this.street = data.street;
		this.number = data.number;
		this.city = data.city;
		this.complement = data.complement;
	}
}
