import { cartItem } from "./cart";
import { Products } from "./products";

export class Order{
  products!: cartItem[] ;
  address!: {
    st: String,
    city: String,
    Country: String,
    Postcode: Number,
  };
  notes!: String;
  Total_price!: Number
      }
    
  