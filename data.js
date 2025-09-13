const MACRONUTRIENTS = {
  protein: { name: "protein", kcalPer1gram: 4 },
  carbs: { name: "carbs", kcalPer1gram: 4 },
  fat: { name: "fat", kcalPer1gram: 9 },
};

const FOOD_ITEMS = [
  {
    fooditem: "Tuna",
    category: "protein_food",
    kcalPer100grams: 132,
    macronutrients: [
      { name: "protein", per100grams: 28, kcal: 112 },
      { name: "fat", per100grams: 1, kcal: 9 },
    ],
  },
  {
    fooditem: "Sirloin",
    category: "protein_food",
    kcalPer100grams: 215,
    macronutrients: [
      { name: "protein", per100grams: 26, kcal: 104 },
      { name: "fat", per100grams: 12, kcal: 108 },
    ],
  },
  {
    fooditem: "Tenderloin",
    category: "protein_food",
    kcalPer100grams: 179,
    macronutrients: [
      { name: "protein", per100grams: 25, kcal: 100 },
      { name: "fat", per100grams: 8, kcal: 72 },
    ],
  },
  {
    fooditem: "Chicken breast",
    category: "protein_food",
    kcalPer100grams: 150,
    macronutrients: [
      { name: "protein", per100grams: 30, kcal: 120 },
      { name: "fat", per100grams: 4, kcal: 36 },
    ],
  },
  {
    fooditem: "Salmon",
    category: "protein_food",
    kcalPer100grams: 206,
    macronutrients: [
      { name: "protein", per100grams: 20, kcal: 80 },
      { name: "fat", per100grams: 13, kcal: 117 },
    ],
  },
  {
    fooditem: "Eggs",
    category: "protein_food",
    kcalPer100grams: 155,
    macronutrients: [
      { name: "protein", per100grams: 13, kcal: 52 },
      { name: "fat", per100grams: 11, kcal: 99 },
    ],
  },
  {
    fooditem: "Tofu",
    category: "protein_food",
    kcalPer100grams: 76,
    macronutrients: [
      { name: "protein", per100grams: 8, kcal: 32 },
      { name: "fat", per100grams: 4, kcal: 36 },
    ],
  },
  {
    fooditem: "Beans",
    category: "protein_food",
    kcalPer100grams: 347,
    macronutrients: [
      { name: "protein", per100grams: 21, kcal: 84 },
      { name: "carbs", per100grams: 63, kcal: 252 },
    ],
  },
  {
    fooditem: "Prosciutto",
    category: "protein_food",
    kcalPer100grams: 270,
    macronutrients: [
      { name: "protein", per100grams: 25, kcal: 100 },
      { name: "fat", per100grams: 18, kcal: 162 },
    ],
  },
  {
    fooditem: "Chicken slices (cold cuts)",
    category: "protein_food",
    kcalPer100grams: 150,
    macronutrients: [
      { name: "protein", per100grams: 20, kcal: 80 },
      { name: "fat", per100grams: 6, kcal: 54 },
    ],
  },
  {
    fooditem: "Cod",
    category: "protein_food",
    kcalPer100grams: 82,
    macronutrients: [
      { name: "protein", per100grams: 18, kcal: 72 },
      { name: "fat", per100grams: 1, kcal: 9 },
    ],
  },
  {
    fooditem: "Sweet potatoes",
    category: "carbs",
    kcalPer100grams: 86,
    macronutrients: [
      { name: "carbs", per100grams: 20, kcal: 80 },
      { name: "protein", per100grams: 1.6, kcal: 6.4 },
    ],
  },
  {
    fooditem: "Potatoes",
    category: "carbs",
    kcalPer100grams: 77,
    macronutrients: [
      { name: "carbs", per100grams: 17, kcal: 68 },
      { name: "protein", per100grams: 2, kcal: 8 },
    ],
  },
  {
    fooditem: "Broccoli",
    category: "fruit_and_vegetables",
    kcalPer100grams: 55,
    macronutrients: [
      { name: "carbs", per100grams: 11, kcal: 44 },
      { name: "protein", per100grams: 3.7, kcal: 14.8 },
    ],
  },
  {
    fooditem: "Bell peppers",
    category: "fruit_and_vegetables",
    kcalPer100grams: 31,
    macronutrients: [
      { name: "carbs", per100grams: 6, kcal: 24 },
      { name: "protein", per100grams: 1, kcal: 4 },
    ],
  },
  {
    fooditem: "Red onions",
    category: "fruit_and_vegetables",
    kcalPer100grams: 40,
    macronutrients: [
      { name: "carbs", per100grams: 9, kcal: 36 },
      { name: "protein", per100grams: 1.1, kcal: 4.4 },
    ],
  },
  {
    fooditem: "Tomatoes",
    category: "fruit_and_vegetables",
    kcalPer100grams: 18,
    macronutrients: [
      { name: "carbs", per100grams: 3.9, kcal: 15.6 },
      { name: "protein", per100grams: 0.9, kcal: 3.6 },
    ],
  },
  {
    fooditem: "Courgette",
    category: "fruit_and_vegetables",
    kcalPer100grams: 17,
    macronutrients: [
      { name: "carbs", per100grams: 3.1, kcal: 12.4 },
      { name: "protein", per100grams: 1.2, kcal: 4.8 },
    ],
  },
  {
    fooditem: "Avocadoes",
    category: "fruit_and_vegetables",
    kcalPer100grams: 160,
    macronutrients: [
      { name: "fat", per100grams: 15, kcal: 135 },
      { name: "carbs", per100grams: 9, kcal: 36 },
    ],
  },
  {
    fooditem: "Quinoa",
    category: "carbs",
    kcalPer100grams: 120,
    macronutrients: [
      { name: "carbs", per100grams: 21, kcal: 84 },
      { name: "protein", per100grams: 4.1, kcal: 16.4 },
    ],
  },
  {
    fooditem: "Rice",
    category: "carbs",
    kcalPer100grams: 130,
    macronutrients: [
      { name: "carbs", per100grams: 28, kcal: 112 },
      { name: "protein", per100grams: 2.7, kcal: 10.8 },
    ],
  },
  {
    fooditem: "Brown rice",
    category: "carbs",
    kcalPer100grams: 111,
    macronutrients: [
      { name: "carbs", per100grams: 23, kcal: 92 },
      { name: "protein", per100grams: 2.6, kcal: 10.4 },
    ],
  },
  {
    fooditem: "Soy milk",
    category: "dairies",
    kcalPer100grams: 54,
    macronutrients: [
      { name: "protein", per100grams: 3.3, kcal: 13.2 },
      { name: "carbs", per100grams: 6, kcal: 24 },
    ],
  },
  {
    fooditem: "Bananas",
    category: "fruit_and_vegetables",
    kcalPer100grams: 89,
    macronutrients: [
      { name: "carbs", per100grams: 23, kcal: 92 },
      { name: "protein", per100grams: 1.1, kcal: 4.4 },
    ],
  },
  {
    fooditem: "Berries",
    category: "fruit_and_vegetables",
    kcalPer100grams: 57,
    macronutrients: [
      { name: "carbs", per100grams: 14, kcal: 56 },
      { name: "protein", per100grams: 0.7, kcal: 2.8 },
    ],
  },
  {
    fooditem: "Skyrr",
    category: "dairies",
    kcalPer100grams: 62,
    macronutrients: [
      { name: "protein", per100grams: 10, kcal: 40 },
      { name: "fat", per100grams: 0.2, kcal: 1.8 },
    ],
  },
  {
    fooditem: "Mozzarellas",
    category: "dairies",
    kcalPer100grams: 280,
    macronutrients: [
      { name: "protein", per100grams: 28, kcal: 112 },
      { name: "fat", per100grams: 17, kcal: 153 },
    ],
  },
  {
    fooditem: "Peanuts",
    category: "nuts_and_seeds",
    kcalPer100grams: 567,
    macronutrients: [
      { name: "protein", per100grams: 25, kcal: 100 },
      { name: "fat", per100grams: 49, kcal: 441 },
    ],
  },
  {
    fooditem: "Almonds",
    category: "nuts_and_seeds",
    kcalPer100grams: 579,
    macronutrients: [
      { name: "protein", per100grams: 21, kcal: 84 },
      { name: "fat", per100grams: 50, kcal: 450 },
    ],
  },
  {
    fooditem: "Pistachios",
    category: "nuts_and_seeds",
    kcalPer100grams: 562,
    macronutrients: [
      { name: "protein", per100grams: 20, kcal: 80 },
      { name: "fat", per100grams: 45, kcal: 405 },
    ],
  },
  {
    fooditem: "Whey protein powder",
    category: "protein_food",
    kcalPer100grams: 400,
    macronutrients: [
      { name: "protein", per100grams: 80, kcal: 320 },
      { name: "carbs", per100grams: 8, kcal: 32 },
    ],
  },
];
