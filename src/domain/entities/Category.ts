export class Category {
	id: number;
	name: string;
	icon: string;

	constructor(data: Category) {
		this.id = data.id;
		this.name = data.name;
		this.icon = data.icon;
	}
}
