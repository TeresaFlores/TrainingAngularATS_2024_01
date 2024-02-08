export type Food = {
  title: string;
  items: FoodItem[];
};
export type FoodItem = {
  name: string;
  description: string;
  addon?: string;
  price: number;
  image: string;
  categories: Partial<FoodCategoryOptions>;
};
export type FoodCategoryOptions = {
  drinkCategory: boolean;
  popCornCategory: boolean;
  hotDogCategory: boolean;
  baguiBreadCategory: boolean;
  baguiCheeseCategory: boolean;
  nachosCategory: boolean;
  nachosCheeseCategory: boolean;
  toppingCategory: boolean;
  dressingCategory: boolean;
  frappeMilkCategory: boolean;
  frappeCategory: boolean;
  crepaCategory: boolean;
  tequesitosCategory: boolean;
};
export type FoodCategoryKey = keyof FoodCategoryOptions;

type FoodVariantFieldType = 'radio' | 'checkbox';
export type FoodOption = { option: string; price: number };
export type FoodCategory = {
  id: FoodCategoryKey;
  title: string;
  required: boolean;
  quantity: number;
  type: FoodVariantFieldType;
  options: FoodOption[];
};

const DrinkCategory: FoodCategory = {
  id: 'drinkCategory',
  title: 'Elige tus refrescos',
  required: true,
  quantity: 2,
  type: 'checkbox',
  options: [
    { option: 'Coca-Cola®', price: 0 },
    { option: 'Manzanita®', price: 20 },
    { option: 'Sprite®', price: 20 },
    { option: 'Sidral Mundet®', price: 20 },
    { option: 'Fuze Tea®', price: 20 },
  ],
};

const PopCornCategory: FoodCategory = {
  id: 'popCornCategory',
  title: 'Elige tus palomitas',
  required: true,
  quantity: 1,
  type: 'radio',
  options: [
    { option: 'Mantequilla', price: 0 },
    { option: 'Caramelo', price: 20 },
    { option: 'Cheetos®', price: 20 },
    { option: 'Takis® Fuego', price: 20 },
    { option: 'Doritos® Nacho®', price: 20 },
    { option: 'Mitad Mantequilla - Mitad Caramelo', price: 20 },
    { option: 'Mitad Mantequilla - Mitad Cheetos®', price: 20 },
    { option: 'Mitad Mantequilla - Mitad Takis® Fuego', price: 20 },
    { option: 'Mitad Mantequilla - Mitad Doritos® Nacho®', price: 20 },
    { option: 'Mitad Caramelo - Mitad Cheetos®', price: 20 },
    { option: 'Mitad Caramelo - Mitad Takis® Fuego', price: 20 },
    { option: 'Mitad Caramelo - Mitad Doritos® Nacho®', price: 20 },
    { option: 'Mitad Cheetos® - Mitad Takis® Fuego', price: 20 },
    { option: 'Mitad Takis® Fuego - Mitad Doritos® Nacho®', price: 20 },
  ],
};

const HotDogCategory: FoodCategory = {
  id: 'hotDogCategory',
  title: 'Elige el tamaño de tu Hot Dog',
  required: true,
  quantity: 1,
  type: 'radio',
  options: [
    { option: 'Tradicional', price: 0 },
    { option: 'Jumbo', price: 10 },
  ],
};

// * use corresponding item name
const toppingsCategory: FoodCategory = {
  id: 'toppingCategory',
  title: `Elige tus toppings`,
  required: false,
  quantity: 6,
  type: 'checkbox',
  options: [
    { option: 'Sin ingredientes', price: 0 },
    { option: 'Jitomate', price: 0 },
    { option: 'Cebolla', price: 0 },
    { option: 'Jalapeños', price: 0 },
    { option: 'Catsup', price: 0 },
    { option: 'Mayonesa', price: 0 },
    { option: 'Mostaza', price: 0 },
  ],
};

const DressingCategory: FoodCategory = {
  id: 'dressingCategory',
  title: `Elige tus aderezos`,
  required: true,
  quantity: 1,
  type: 'radio',
  options: [
    { option: 'BBQ', price: 0 },
    { option: 'Buffalo Wings', price: 0 },
    { option: 'Chipotle', price: 0 },
  ],
};

const NachosCategory: FoodCategory = {
  id: 'nachosCategory',
  title: 'Elige el tipo de Nachos',
  required: true,
  quantity: 1,
  type: 'radio',
  options: [
    { option: 'Nachos Clásicos', price: 0 },
    { option: 'Doritos® Nacho®', price: 10 },
  ],
};

const NachosCheeseCategory: FoodCategory = {
  id: 'nachosCheeseCategory',
  title: 'Agrega queso a tus Nachos',
  required: true,
  quantity: 1,
  type: 'radio',
  options: [
    { option: 'Sin Queso', price: 0 },
    { option: 'Con Queso', price: 0 },
  ],
};

const BaguiBreadCategory: FoodCategory = {
  id: 'baguiBreadCategory',
  title: 'Elige el pan de tu Bagui',
  required: true,
  quantity: 1,
  type: 'radio',
  options: [
    { option: 'Pan Blanco', price: 0 },
    { option: 'Pan Multigrano', price: 0 },
    { option: 'Pan Orégano Parmesano', price: 0 },
    { option: 'Pan Integral', price: 0 },
  ],
};

const BaguiCheeseCategory: FoodCategory = {
  id: 'baguiCheeseCategory',
  title: 'Elige el queso de tu Bagui',
  required: true,
  quantity: 1,
  type: 'radio',
  options: [
    { option: 'Queso Manchego', price: 0 },
    { option: 'Queso Crema Philadelphia®', price: 0 },
    { option: 'Queso Americano', price: 0 },
    { option: 'Sin Queso', price: 0 },
  ],
};

const FrappeMilkCategory: FoodCategory = {
  id: 'frappeMilkCategory',
  title: 'Elige el tipo de leche',
  required: true,
  quantity: 1,
  type: 'radio',
  options: [
    { option: 'Leche Entera', price: 0 },
    { option: 'Leche Deslactosada', price: 10 },
  ],
};

const FrappeCategory: FoodCategory = {
  id: 'frappeCategory',
  title: 'Elige tu Frappe',
  required: true,
  quantity: 1,
  type: 'radio',
  options: [
    { option: 'Frappé Capuccino', price: 0 },
    { option: 'Frappé Moka Caramelo', price: 0 },
    { option: 'Frappé Chocolate Blanco', price: 0 },
    { option: 'Frappé Carlos V', price: 0 },
  ],
};

const CrepaCategory: FoodCategory = {
  id: 'crepaCategory',
  title: 'Elige tu Crepa',
  required: true,
  quantity: 2,
  type: 'checkbox',
  options: [
    { option: 'Nutella® (Dulce)', price: 0 },
    { option: 'Mermelada Zarzamora (Dulce)', price: 0 },
    { option: 'Mermelada Fresa (Dulce)', price: 0 },
    { option: 'Cajeta (Dulce)', price: 0 },
    { option: 'Nuez (Dulce)', price: 0 },
    { option: 'Queso Crema Philadelphia®', price: 0 },
    { option: 'Jamón de Cerdo (Salada)', price: 0 },
    { option: 'Jamón de Pavo (Salada)', price: 0 },
    { option: 'Queso Manchego (Salada)', price: 0 },
    { option: 'Queso Americano (Salada)', price: 0 },
    { option: 'Champiñones (Salada)', price: 0 },
  ],
};

const TequesitosCategory: FoodCategory = {
  id: 'tequesitosCategory',
  title: 'Elige tus Tequesitos',
  required: true,
  quantity: 1,
  type: 'radio',
  options: [
    { option: 'Tequesitos Manchego', price: 0 },
    { option: 'Tequesitos Pepperoni', price: 5 },
  ],
};

export const foodCategories = [
  DrinkCategory,
  PopCornCategory,
  BaguiBreadCategory,
  BaguiCheeseCategory,
  HotDogCategory,
  toppingsCategory,
  NachosCategory,
  NachosCheeseCategory,
  DressingCategory,
  FrappeMilkCategory,
  FrappeCategory,
  CrepaCategory,
  TequesitosCategory,
];

export const data: Food[] = [
  {
    title: 'Combos',
    items: [
      {
        name: 'Combo Mix',
        description:
          'Palomitas Cinépolis® Para Llevar + 1 Nachos Grandes + 1 Hot Dog + 2 latas de refresco de 355 ml.',
        price: 341,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/2a8f37f5ad58bf02765afefb29c2f250/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          drinkCategory: true,
          popCornCategory: true,
          hotDogCategory: true,
          toppingCategory: true,
          nachosCategory: true,
          nachosCheeseCategory: true,
        },
      },
      {
        name: 'Combo Nachos en Pareja',
        description:
          'Palomitas Cinépolis® Para Llevar + 1 Nachos Grandes + 2 latas de refresco de 355 ml.',
        price: 260,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/c0de5a580b3c95e93a4541a86780cf86/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          drinkCategory: true,
          popCornCategory: true,
          nachosCategory: true,
          nachosCheeseCategory: true,
        },
      },
      {
        name: 'Combo Palomitas',
        description:
          'Palomitas cinépolis® para llevar + 2 latas de refresco de 355 ml.',
        price: 170,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/f2ebe6e83635b1d7dbebe55051b63e9a/a19bb09692310dfd41e49a96c424b3a6.jpeg',
        categories: {
          drinkCategory: true,
          popCornCategory: true,
        },
      },
      {
        name: 'Combo Bagui pareja',
        description:
          'Palomitas + 2 Baguis + Papas Twistter + 2 Latas de Refresco',
        price: 459,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/6bfe57839b960a52ebedeaa75bc52664/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          drinkCategory: true,
          popCornCategory: true,
          baguiBreadCategory: true,
          baguiCheeseCategory: true,
          toppingCategory: true,
        },
      },
      {
        name: 'Combo Crepa pareja',
        description:
          '1 Palomitas Cinépolis® Para Llevar + 2 Frappés Grandes + 2 Crepas',
        price: 430,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/1b6a9366e2ba336b24b31b54b55c1f1f/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          popCornCategory: true,
          frappeMilkCategory: true,
          frappeCategory: true,
          crepaCategory: true,
        },
      },
    ],
  },
  {
    title: 'Dulceria VIP',
    items: [
      {
        name: 'Palomitas Cinépolis',
        description:
          'Macro Canasta con deliciosas Palomitas Cinépolis® Para Llevar recién hechas. Combina hasta 4 sabores.',
        price: 110,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/7710ae0f3dac9ad8e00c929d9d475168/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          popCornCategory: true,
        },
      },
      {
        name: 'Hot Dog Cinépolis',
        description:
          'Exquisito Hot Dog Cinépolis® Tradicional + Papas Twistter',
        price: 105,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/f08d4bc65be7e63a3a83beab4ff9162f/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          hotDogCategory: true,
          toppingCategory: true,
        },
      },
      {
        name: 'Nachos',
        description:
          'Exquisitos Nachos acompañados con delicioso queso cheddar y jalapeños.',
        price: 95,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/8d1b269cf9000a1197c4a8e587c2e863/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          nachosCategory: true,
          nachosCheeseCategory: true,
        },
      },
      {
        name: 'Extra Queso',
        description: '3 oz de queso cheddar para nachos.',
        price: 22,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/497b1d58be96dbd52c85cd47abb77eb1/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {},
      },
      {
        name: 'Refresco',
        description:
          'Elige tu lata de refresco de 355ml de la familia Coca-Cola®. ( Fanta, Coca-Cola, Coca-Cola SA, Coca-Cola L.)',
        price: 85,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/802492f808c5b118d1082c838f7e49f8/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          drinkCategory: true,
        },
      },
    ],
  },

  {
    title: 'Baguis',
    items: [
      {
        name: 'Bagui Pavo',
        description: 'Baguette con pechuga de pavo y queso a elegir. ',
        addon: 'Acompañado de papas Twistter.',
        price: 154,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/b4171eb89139b8e737180031161e82b7/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          baguiBreadCategory: true,
          baguiCheeseCategory: true,

          toppingCategory: true,
        },
      },
      {
        name: 'Bagui Milán',
        description: 'Baguette con salami, jamón de pierna y queso a elegir.',
        addon: 'Acompañado de papas Twistter.',
        price: 168,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/231ec001abb5a297fee6eae091d4f598/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          baguiBreadCategory: true,
          baguiCheeseCategory: true,
          toppingCategory: true,
        },
      },
      {
        name: 'Bagui Club',
        description:
          'Baguette jamón de pierna, pechuga de pavo, tocino, queso Manchego y queso cheddar.',
        addon: 'Acompañado de papas Twistter.',
        price: 168,
        image:
          'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZDFmM2M4OTRkNTdmOWJiOTI2ZmJkNWQyNGRjNzQyMzYvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==',
        categories: {
          baguiBreadCategory: true,
          baguiCheeseCategory: true,
          toppingCategory: true,
        },
      },
      {
        name: 'Bagui Español',
        description: 'Baguette con jamón serrano y queso a elegir.',
        addon: 'Acompañado de papas Twistter.',
        price: 172,
        image:
          'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZjZjNTQ1NjE3MjViYWZkMzZkOWEzNzA3YjhjY2ViMDgvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==',
        categories: {
          baguiBreadCategory: true,
          baguiCheeseCategory: true,
          toppingCategory: true,
        },
      },
      {
        name: 'Bagui Res',
        description:
          'Baguette con brisket de res, frijoles refritos, queso a elegir y guacamole',
        addon: 'Acompañado de papas Twistter.',
        price: 168,
        image:
          'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZjE4MzUyMjNlYjlhODMxNzUzZWQzZGE0ZjdmZjkyODQvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==',
        categories: {
          baguiBreadCategory: true,
          baguiCheeseCategory: true,
          toppingCategory: true,
        },
      },
    ],
  },
  {
    title: 'Snacks',
    items: [
      {
        name: 'Boneless Wings',
        description:
          '250g de alitas de pollo sin hueso, acompañadas con salsa a elegir.',
        price: 179,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/52b32b67e76fc890273354ed409ec4f7/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          dressingCategory: true,
        },
      },
      {
        name: 'Tequesitos',
        description:
          'Dedos de harina de trigo con tu relleno preferido (5 piezas).',
        price: 154,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/cb507405220df70d57112db0651c6b71/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          tequesitosCategory: true,
        },
      },
      {
        name: 'Papas Twister',
        description: 'Porción de deliciosas Papas Twistter (250 grs).',
        price: 90,
        image:
          'https://tb-static.uber.com/prod/image-proc/processed_images/366e482385715c0570b6431ae6a6c18c/4218ca1d09174218364162cd0b1a8cc1.jpeg',
        categories: {
          dressingCategory: true,
        },
      },
    ],
  },
];
