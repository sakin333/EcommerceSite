export type CartItems = {
  id: number;
  quantity: number;
};

export type InitialState = {
  cartItems: CartItems[];
  cartQuantity: number;
};
