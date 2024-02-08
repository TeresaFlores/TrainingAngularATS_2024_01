export type StoreFood = {
  image: string;
  name: string;
  price: string;
};

export type StoreCombo = StoreFood & {
  description: string;
};
