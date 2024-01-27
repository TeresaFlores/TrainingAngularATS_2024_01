export interface CartItem {
  id: string;
  name: string;
  price: number;
}

export interface CartComboItem extends CartItem {
  items: CartItem[];
  discountPercentage: number;
}