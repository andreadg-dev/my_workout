//Protein range 1.6g to 2.2g per kg
//Macronutrient proportions: 170g protein, 70g fat, 250g carbs

function addFoodItemsSection() {
  const sectionBeginning = `
  <section id="myFavFoods" style="padding-bottom: 0px;">
    <button type="button" class="btn btn-info btn-lg w-100 btn-dark">
          MY FAVORITE FOODs (WIP)
    </button>
    <div class="row">`;

  //Grouping food items by category and sorting alphabetically inside of each category
  const foodElementsGroupedByCat = FOOD_ITEMS.reduce((acc, item) => {
    const cat = item.category;
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(item);
    return acc;
  }, {});

  // sort inside each category (example: by fooditem alphabetically)
  Object.keys(foodElementsGroupedByCat).forEach((cat) => {
    foodElementsGroupedByCat[cat].sort((a, b) =>
      a.fooditem.localeCompare(b.fooditem)
    );
  });

  console.log(foodElementsGroupedByCat);

  const foodElements = Object.keys(foodElementsGroupedByCat).map((category) => {
    const cardTop = `<div class="card-header">
                        <strong>${category}</strong>
                    </div>
                    <ul class="list-group list-group-flush">`;

    const cardList = foodElementsGroupedByCat[category].map((item) => {
      const macros = item.macronutrients.map((macro) => {
        return `<span>${macro.name}: ${macro.percentage} grams (${
          MACRONUTRIENTS[macro.name].kcalPer1gram * macro.percentage
        } kcal)</span>`;
      });

      return `<li class="list-group-item text-white bg-dark fooditem_${category}">
                <p class="fooditem-name">${item.fooditem}</p>
                <p class="fooditem-info">100g: ${item.kcalPer100grams} kcal</p>
                <p class="fooditem-macros">Macros: ${macros.join(" - ")}</p>
            </li>`;
    });

    return `${cardTop}${cardList.join("")}</ul>`;
  });

  /* const foodElements = FOOD_ITEMS.map((item) => {
    return `<div class="card col-md-5 col-sm-12 text-dark bg-light mb-3 px-0">
            <div class="card-header">
                <strong>${item.fooditem}</strong>
            </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Food category: ${item.category}</li>
                <li class="list-group-item">Kcal (100g)${
                  item.kcalPer100grams
                }</li>
                <li class="list-group-item">Macronutrients ${JSON.stringify(
                  item.macronutrients
                )}</li>
              </ul>
        </div>`;
  }); */

  const foodSection = `${sectionBeginning}
        <div class="card text-light bg-dark mb-3 px-0" id="fooditems">
            ${foodElements.join("")}
        </div>
    </div>
  </section>`;

  $("#rootMain").append(foodSection);
}

function appendFooter() {
  const FOOTER = `<footer>
      <div
        style="display: block; padding: 20px; height: 60px; width: 100%"
      ></div>
      <div id="copyright">Copyright ©${new Date().getFullYear()}</div>
    </footer>`;

  $("#root").append(FOOTER);
}

const HIGH_PROTEIN_DIET = {
  kcalDaily: 2310,
  protein: { grams: 170, kcal: 680, percentage: 30 },
  fat: { grams: 70, kcal: 630, percentage: 27 },
  carbs: { grams: 250, kcal: 1000, percentage: 43 },
};

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
      { name: "protein", percentage: 28 },
      { name: "fat", percentage: 1 },
    ],
  },
  {
    fooditem: "Sirloin",
    category: "protein_food",
    kcalPer100grams: 200,
    macronutrients: [
      { name: "protein", percentage: 27 },
      { name: "fat", percentage: 12 },
    ],
  },
  {
    fooditem: "Tenderloin",
    category: "protein_food",
    kcalPer100grams: 179,
    macronutrients: [
      { name: "protein", percentage: 26 },
      { name: "fat", percentage: 8 },
    ],
  },
  {
    fooditem: "Chicken breast",
    category: "protein_food",
    kcalPer100grams: 150,
    macronutrients: [
      { name: "protein", percentage: 31 },
      { name: "fat", percentage: 3 },
    ],
  },
  {
    fooditem: "Salmon",
    category: "protein_food",
    kcalPer100grams: 206,
    macronutrients: [
      { name: "protein", percentage: 20 },
      { name: "fat", percentage: 13 },
    ],
  },
  {
    fooditem: "Eggs",
    category: "protein_food",
    kcalPer100grams: 155,
    macronutrients: [
      { name: "protein", percentage: 13 },
      { name: "fat", percentage: 11 },
    ],
  },
  {
    fooditem: "Tofu",
    category: "protein_food",
    kcalPer100grams: 76,
    macronutrients: [
      { name: "protein", percentage: 8 },
      { name: "fat", percentage: 5 },
      { name: "carbs", percentage: 2 },
    ],
  },
  {
    fooditem:
      "Canned Beans mix (chickpeas, white beans, red beans, lima beans)",
    category: "protein_food",
    kcalPer100grams: 120,
    macronutrients: [
      { name: "carbs", percentage: 21 },
      { name: "protein", percentage: 7 },
      { name: "fat", percentage: 1 },
    ],
  },
  {
    fooditem: "Prosciutto",
    category: "protein_food",
    kcalPer100grams: 270,
    macronutrients: [
      { name: "protein", percentage: 25 },
      { name: "fat", percentage: 18 },
    ],
  },
  {
    fooditem: "Chicken slices (cold cuts)",
    category: "protein_food",
    kcalPer100grams: 150,
    macronutrients: [
      { name: "protein", percentage: 17 },
      { name: "fat", percentage: 8 },
    ],
  },
  {
    fooditem: "Cod",
    category: "protein_food",
    kcalPer100grams: 82,
    macronutrients: [
      { name: "protein", percentage: 18 },
      { name: "fat", percentage: 1 },
    ],
  },
  {
    fooditem: "Sweet potatoes",
    category: "carbs",
    kcalPer100grams: 86,
    macronutrients: [
      { name: "carbs", percentage: 20 },
      { name: "protein", percentage: 2 },
    ],
  },
  {
    fooditem: "Potatoes",
    category: "carbs",
    kcalPer100grams: 77,
    macronutrients: [
      { name: "carbs", percentage: 17 },
      { name: "protein", percentage: 2 },
    ],
  },
  {
    fooditem: "Broccoli",
    category: "fruit_and_vegetables",
    kcalPer100grams: 55,
    macronutrients: [
      { name: "carbs", percentage: 11 },
      { name: "protein", percentage: 4 },
    ],
  },
  {
    fooditem: "Bell peppers",
    category: "fruit_and_vegetables",
    kcalPer100grams: 31,
    macronutrients: [
      { name: "carbs", percentage: 6 },
      { name: "protein", percentage: 1 },
    ],
  },
  {
    fooditem: "Red onions",
    category: "fruit_and_vegetables",
    kcalPer100grams: 40,
    macronutrients: [
      { name: "carbs", percentage: 9 },
      { name: "protein", percentage: 1 },
    ],
  },
  {
    fooditem: "Tomatoes",
    category: "fruit_and_vegetables",
    kcalPer100grams: 18,
    macronutrients: [
      { name: "carbs", percentage: 4 },
      { name: "protein", percentage: 1 },
    ],
  },
  {
    fooditem: "Courgette",
    category: "fruit_and_vegetables",
    kcalPer100grams: 17,
    macronutrients: [
      { name: "carbs", percentage: 3 },
      { name: "protein", percentage: 1 },
    ],
  },
  {
    fooditem: "Avocadoes",
    category: "fruit_and_vegetables",
    kcalPer100grams: 160,
    macronutrients: [
      { name: "fat", percentage: 15 },
      { name: "carbs", percentage: 9 },
      { name: "protein", percentage: 2 },
    ],
  },
  {
    fooditem: "Quinoa",
    category: "carbs",
    kcalPer100grams: 120,
    macronutrients: [
      { name: "carbs", percentage: 21 },
      { name: "protein", percentage: 4 },
      { name: "fat", percentage: 2 },
    ],
  },
  {
    fooditem: "Rice",
    category: "carbs",
    kcalPer100grams: 130,
    macronutrients: [
      { name: "carbs", percentage: 28 },
      { name: "protein", percentage: 3 },
    ],
  },
  {
    fooditem: "Brown rice",
    category: "carbs",
    kcalPer100grams: 111,
    macronutrients: [
      { name: "carbs", percentage: 23 },
      { name: "protein", percentage: 2 },
      { name: "fat", percentage: 1 },
    ],
  },
  {
    fooditem: "Soy milk",
    category: "dairies",
    kcalPer100grams: 54,
    macronutrients: [
      { name: "carbs", percentage: 6 },
      { name: "protein", percentage: 3 },
      { name: "fat", percentage: 2 },
    ],
  },
  {
    fooditem: "Bananas",
    category: "fruit_and_vegetables",
    kcalPer100grams: 89,
    macronutrients: [
      { name: "carbs", percentage: 23 },
      { name: "protein", percentage: 1 },
    ],
  },
  {
    fooditem:
      "Frozen Berries mix (Blackcurrant, blueberry, redcurrant, strawberry, blackberry, raspberry)",
    category: "fruit_and_vegetables",
    kcalPer100grams: 57,
    macronutrients: [
      { name: "carbs", percentage: 14 },
      { name: "protein", percentage: 1 },
    ],
  },
  {
    fooditem: "Apples",
    category: "fruit_and_vegetables",
    kcalPer100grams: 52,
    macronutrients: [
      { name: "carbs", percentage: 14 },
      { name: "protein", percentage: 1 },
    ],
  },
  {
    fooditem: "Skyrr",
    category: "dairies",
    kcalPer100grams: 62,
    macronutrients: [
      { name: "protein", percentage: 11 },
      { name: "carbs", percentage: 4 },
    ],
  },
  {
    fooditem: "Mozzarellas",
    category: "dairies",
    kcalPer100grams: 280,
    macronutrients: [
      { name: "protein", percentage: 28 },
      { name: "fat", percentage: 17 },
      { name: "carbs", percentage: 3 },
    ],
  },
  {
    fooditem: "Peanuts",
    category: "nuts_seeds",
    kcalPer100grams: 567,
    macronutrients: [
      { name: "fat", percentage: 49 },
      { name: "protein", percentage: 26 },
      { name: "carbs", percentage: 16 },
    ],
  },
  {
    fooditem: "Almonds",
    category: "nuts_seeds",
    kcalPer100grams: 579,
    macronutrients: [
      { name: "fat", percentage: 50 },
      { name: "protein", percentage: 21 },
      { name: "carbs", percentage: 22 },
    ],
  },
  {
    fooditem: "Pistachios",
    category: "nuts_seeds",
    kcalPer100grams: 562,
    macronutrients: [
      { name: "fat", percentage: 45 },
      { name: "protein", percentage: 20 },
      { name: "carbs", percentage: 28 },
    ],
  },
  {
    fooditem: "Whey protein powder",
    category: "protein_food",
    kcalPer100grams: 400,
    macronutrients: [
      { name: "protein", percentage: 80 },
      { name: "carbs", percentage: 8 },
      { name: "fat", percentage: 6 },
    ],
  },
  {
    fooditem: "Whole grain bread",
    category: "carbs",
    kcalPer100grams: 247,
    macronutrients: [
      { name: "carbs", percentage: 41 },
      { name: "protein", percentage: 13 },
      { name: "fat", percentage: 4 },
    ],
  },
  {
    fooditem: "Mayonnaise",
    category: "fats_oils",
    kcalPer100grams: 680,
    macronutrients: [
      { name: "fat", percentage: 75 },
      { name: "protein", percentage: 1 },
      { name: "carbs", percentage: 1 },
    ],
  },
  {
    fooditem: "Extra virgin olive oil",
    category: "fats_oils",
    kcalPer100grams: 884,
    macronutrients: [{ name: "fat", percentage: 100 }],
  },
];
