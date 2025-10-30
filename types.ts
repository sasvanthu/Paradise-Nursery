
export interface Plant {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItem extends Plant {
  quantity: number;
}
