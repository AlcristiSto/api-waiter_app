import { OrderStatus, PaymentType } from "../../utils/enum";

export class Order {
	public table: string;
	public status: keyof typeof OrderStatus;
	public created_at: Date;
	public products: Array<{ product: string; quantity: number }>;
	public total: number;
	public restaurant: string;
	public customer: string;
	public payment_type: keyof typeof PaymentType;

	constructor(data: Order) {
		this.table = data.table;
		this.status = data.status;
		this.created_at = data.created_at;
		this.products = data.products;
		this.total = data.total;
		this.restaurant = data.restaurant;
		this.customer = data.customer;
		this.payment_type = data.payment_type;
	}
}
