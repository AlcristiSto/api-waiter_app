export class Product {
	public name: string;
	public description: string;
	public imagePath: string;
	public price: number;
	public ingredients: Array<{ name: string; icon: string }>;
	public category: string;
	public restaurant: string;

	constructor(data: Product) {
		this.name = data.name;
		this.description = data.description;
		this.imagePath = data.imagePath;
		this.price = data.price;
		this.ingredients = data.ingredients;
		this.category = data.category;
		this.restaurant = data.restaurant;
	}
}
