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

  //console.log(foodElementsGroupedByCat);

  const foodElements = Object.keys(foodElementsGroupedByCat).map((category) => {
    const cardTop = `<div class="card-header">
                        <strong>${category}</strong>
                    </div>
                    <ul class="list-group list-group-flush">`;

    const cardList = foodElementsGroupedByCat[category].map((item) => {
      const macros = item.macronutrients.map((macro) => {
        return `<span class="macro-${macro.name}">${macro.name}: ${
          macro.percentage
        } grams (${
          MACRONUTRIENTS[macro.name].kcalPer1gram * macro.percentage
        } kcal)</span>`;
      });

      const calculatedMacros = item.macronutrients.map((calMacro) => {
        return `<div class="cal-macro cal-macro-${calMacro.name}">
                    <span class="cal-macro-line cal-macro-line-${
                      calMacro.name
                    }-name">${calMacro.name.toUpperCase()}</span> 
                    <span class="cal-macro-line cal-macro-line-${
                      calMacro.name
                    }-grams">0 g</span> 
                    <span class="cal-macro-line cal-macro-line-${
                      calMacro.name
                    }-kcal">0 kcal</span>
                </div>`;
      });

      return `<div class="row list-group-item text-white fooditem_${category}" id="fooditem${
        item.id
      }">
                <div class="fooditems-div col" id="fooditeminfo-${item.id}">
                    <p class="fooditem fooditem-name">${item.fooditem}</p>
                    <p class="fooditem fooditem-info">100g: ${
                      item.kcalPer100grams
                    } kcal</p>
                    <p class="fooditem fooditem-macros">Macros: ${macros.join(
                      "<span class='macros-space'></span>"
                    )}</p>
                </div>
                <div class="fooditems-div-cal col">
                    ${calculatedMacros.join("")}
                </div>
                <div class="fooditems-div-cal col-2">
                    <div class="fooditems-div-input">
                        <input
                        type="number"
                        class="fooditemgrams"
                        name="fooditemgrams"
                        min="0"
                        max="99999"
                        step="10"
                        value="0"/>
                    </div>
                </div>
            </div>`;
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

function updateDynamicFoodItemMacros() {
  $(".fooditemgrams").on("input", function () {
    //Filtering the corresponding food item from the FOOD_ITEMS object
    const filteredFoodItem = FOOD_ITEMS.filter((fooditem) => {
      return (
        fooditem.id ===
        Number(
          $(this)
            .closest(".list-group-item")
            .find(".fooditems-div")
            .attr("id")
            .replace("fooditeminfo-", "")
            .trim()
        )
      );
    });

    filteredFoodItem[0].macronutrients.forEach((fooditem) => {
      const macroGrams = Number(
        ($(this).val() * (Number(fooditem.percentage) / 100)).toFixed(1)
      );

      const macroKcal = Number(
        (
          $(this).val() *
          (Number(fooditem.percentage) / 100) *
          MACRONUTRIENTS[fooditem.name].kcalPer1gram
        ).toFixed(1)
      );

      //Updating the corresponding macro nutriens grams info depending on value typed in the input element
      $(this)
        .closest(".list-group-item")
        .find(`.cal-macro-line-${fooditem.name}-grams`)
        .text(macroGrams + " g");

      //Updating the corresponding macro nutriens kcal info depending on value typed in the input element
      $(this)
        .closest(".list-group-item")
        .find(`.cal-macro-line-${fooditem.name}-kcal`)
        .text(macroKcal + "kcal");
    });
  });
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
    id: 1,
    fooditem: "Tuna",
    category: "protein_food",
    kcalPer100grams: 132,
    macronutrients: [
      {
        name: "protein",
        percentage: 28,
      },
      {
        name: "fat",
        percentage: 1,
      },
    ],
  },
  {
    id: 2,
    fooditem: "Sirloin",
    category: "protein_food",
    kcalPer100grams: 200,
    macronutrients: [
      {
        name: "protein",
        percentage: 27,
      },
      {
        name: "fat",
        percentage: 12,
      },
    ],
  },
  {
    id: 3,
    fooditem: "Tenderloin",
    category: "protein_food",
    kcalPer100grams: 179,
    macronutrients: [
      {
        name: "protein",
        percentage: 26,
      },
      {
        name: "fat",
        percentage: 8,
      },
    ],
  },
  {
    id: 4,
    fooditem: "Chicken breast",
    category: "protein_food",
    kcalPer100grams: 150,
    macronutrients: [
      {
        name: "protein",
        percentage: 31,
      },
      {
        name: "fat",
        percentage: 3,
      },
    ],
  },
  {
    id: 5,
    fooditem: "Salmon",
    category: "protein_food",
    kcalPer100grams: 206,
    macronutrients: [
      {
        name: "protein",
        percentage: 20,
      },
      {
        name: "fat",
        percentage: 13,
      },
    ],
  },
  {
    id: 6,
    fooditem: "Eggs",
    category: "protein_food",
    kcalPer100grams: 155,
    macronutrients: [
      {
        name: "protein",
        percentage: 13,
      },
      {
        name: "fat",
        percentage: 11,
      },
    ],
  },
  {
    id: 7,
    fooditem: "Tofu",
    category: "protein_food",
    kcalPer100grams: 76,
    macronutrients: [
      {
        name: "protein",
        percentage: 8,
      },
      {
        name: "fat",
        percentage: 5,
      },
      {
        name: "carbs",
        percentage: 2,
      },
    ],
  },
  {
    id: 8,
    fooditem:
      "Canned Beans mix (chickpeas, white beans, red beans, lima beans)",
    category: "protein_food",
    kcalPer100grams: 120,
    macronutrients: [
      {
        name: "carbs",
        percentage: 21,
      },
      {
        name: "protein",
        percentage: 7,
      },
      {
        name: "fat",
        percentage: 1,
      },
    ],
  },
  {
    id: 9,
    fooditem: "Prosciutto",
    category: "protein_food",
    kcalPer100grams: 270,
    macronutrients: [
      {
        name: "protein",
        percentage: 25,
      },
      {
        name: "fat",
        percentage: 18,
      },
    ],
  },
  {
    id: 10,
    fooditem: "Chicken slices (cold cuts)",
    category: "protein_food",
    kcalPer100grams: 150,
    macronutrients: [
      {
        name: "protein",
        percentage: 17,
      },
      {
        name: "fat",
        percentage: 8,
      },
    ],
  },
  {
    id: 11,
    fooditem: "Cod",
    category: "protein_food",
    kcalPer100grams: 82,
    macronutrients: [
      {
        name: "protein",
        percentage: 18,
      },
      {
        name: "fat",
        percentage: 1,
      },
    ],
  },
  {
    id: 12,
    fooditem: "Sweet potatoes",
    category: "carbs",
    kcalPer100grams: 86,
    macronutrients: [
      {
        name: "carbs",
        percentage: 20,
      },
      {
        name: "protein",
        percentage: 2,
      },
    ],
  },
  {
    id: 13,
    fooditem: "Potatoes",
    category: "carbs",
    kcalPer100grams: 77,
    macronutrients: [
      {
        name: "carbs",
        percentage: 17,
      },
      {
        name: "protein",
        percentage: 2,
      },
    ],
  },
  {
    id: 14,
    fooditem: "Broccoli",
    category: "fruit_and_vegetables",
    kcalPer100grams: 55,
    macronutrients: [
      {
        name: "carbs",
        percentage: 11,
      },
      {
        name: "protein",
        percentage: 4,
      },
    ],
  },
  {
    id: 15,
    fooditem: "Bell peppers",
    category: "fruit_and_vegetables",
    kcalPer100grams: 31,
    macronutrients: [
      {
        name: "carbs",
        percentage: 6,
      },
      {
        name: "protein",
        percentage: 1,
      },
    ],
  },
  {
    id: 16,
    fooditem: "Red onions",
    category: "fruit_and_vegetables",
    kcalPer100grams: 40,
    macronutrients: [
      {
        name: "carbs",
        percentage: 9,
      },
      {
        name: "protein",
        percentage: 1,
      },
    ],
  },
  {
    id: 17,
    fooditem: "Tomatoes",
    category: "fruit_and_vegetables",
    kcalPer100grams: 18,
    macronutrients: [
      {
        name: "carbs",
        percentage: 4,
      },
      {
        name: "protein",
        percentage: 1,
      },
    ],
  },
  {
    id: 18,
    fooditem: "Courgette",
    category: "fruit_and_vegetables",
    kcalPer100grams: 17,
    macronutrients: [
      {
        name: "carbs",
        percentage: 3,
      },
      {
        name: "protein",
        percentage: 1,
      },
    ],
  },
  {
    id: 19,
    fooditem: "Avocadoes",
    category: "fruit_and_vegetables",
    kcalPer100grams: 160,
    macronutrients: [
      {
        name: "fat",
        percentage: 15,
      },
      {
        name: "carbs",
        percentage: 9,
      },
      {
        name: "protein",
        percentage: 2,
      },
    ],
  },
  {
    id: 20,
    fooditem: "Quinoa",
    category: "carbs",
    kcalPer100grams: 120,
    macronutrients: [
      {
        name: "carbs",
        percentage: 21,
      },
      {
        name: "protein",
        percentage: 4,
      },
      {
        name: "fat",
        percentage: 2,
      },
    ],
  },
  {
    id: 21,
    fooditem: "Rice",
    category: "carbs",
    kcalPer100grams: 130,
    macronutrients: [
      {
        name: "carbs",
        percentage: 28,
      },
      {
        name: "protein",
        percentage: 3,
      },
    ],
  },
  {
    id: 22,
    fooditem: "Brown rice",
    category: "carbs",
    kcalPer100grams: 111,
    macronutrients: [
      {
        name: "carbs",
        percentage: 23,
      },
      {
        name: "protein",
        percentage: 2,
      },
      {
        name: "fat",
        percentage: 1,
      },
    ],
  },
  {
    id: 23,
    fooditem: "Soy milk",
    category: "dairies",
    kcalPer100grams: 54,
    macronutrients: [
      {
        name: "carbs",
        percentage: 6,
      },
      {
        name: "protein",
        percentage: 3,
      },
      {
        name: "fat",
        percentage: 2,
      },
    ],
  },
  {
    id: 24,
    fooditem: "Bananas",
    category: "fruit_and_vegetables",
    kcalPer100grams: 89,
    macronutrients: [
      {
        name: "carbs",
        percentage: 23,
      },
      {
        name: "protein",
        percentage: 1,
      },
    ],
  },
  {
    id: 25,
    fooditem:
      "Frozen Berries mix (Blackcurrant, blueberry, redcurrant, strawberry, blackberry, raspberry)",
    category: "fruit_and_vegetables",
    kcalPer100grams: 57,
    macronutrients: [
      {
        name: "carbs",
        percentage: 14,
      },
      {
        name: "protein",
        percentage: 1,
      },
    ],
  },
  {
    id: 26,
    fooditem: "Apples",
    category: "fruit_and_vegetables",
    kcalPer100grams: 52,
    macronutrients: [
      {
        name: "carbs",
        percentage: 14,
      },
      {
        name: "protein",
        percentage: 1,
      },
    ],
  },
  {
    id: 27,
    fooditem: "Skyrr",
    category: "dairies",
    kcalPer100grams: 62,
    macronutrients: [
      {
        name: "protein",
        percentage: 11,
      },
      {
        name: "carbs",
        percentage: 4,
      },
    ],
  },
  {
    id: 28,
    fooditem: "Mozzarellas",
    category: "dairies",
    kcalPer100grams: 280,
    macronutrients: [
      {
        name: "protein",
        percentage: 28,
      },
      {
        name: "fat",
        percentage: 17,
      },
      {
        name: "carbs",
        percentage: 3,
      },
    ],
  },
  {
    id: 29,
    fooditem: "Peanuts",
    category: "nuts_seeds",
    kcalPer100grams: 567,
    macronutrients: [
      {
        name: "fat",
        percentage: 49,
      },
      {
        name: "protein",
        percentage: 26,
      },
      {
        name: "carbs",
        percentage: 16,
      },
    ],
  },
  {
    id: 30,
    fooditem: "Almonds",
    category: "nuts_seeds",
    kcalPer100grams: 579,
    macronutrients: [
      {
        name: "fat",
        percentage: 50,
      },
      {
        name: "protein",
        percentage: 21,
      },
      {
        name: "carbs",
        percentage: 22,
      },
    ],
  },
  {
    id: 31,
    fooditem: "Pistachios",
    category: "nuts_seeds",
    kcalPer100grams: 562,
    macronutrients: [
      {
        name: "fat",
        percentage: 45,
      },
      {
        name: "protein",
        percentage: 20,
      },
      {
        name: "carbs",
        percentage: 28,
      },
    ],
  },
  {
    id: 32,
    fooditem: "Whey protein powder",
    category: "protein_food",
    kcalPer100grams: 400,
    macronutrients: [
      {
        name: "protein",
        percentage: 80,
      },
      {
        name: "carbs",
        percentage: 8,
      },
      {
        name: "fat",
        percentage: 6,
      },
    ],
  },
  {
    id: 33,
    fooditem: "Whole grain bread",
    category: "carbs",
    kcalPer100grams: 247,
    macronutrients: [
      {
        name: "carbs",
        percentage: 41,
      },
      {
        name: "protein",
        percentage: 13,
      },
      {
        name: "fat",
        percentage: 4,
      },
    ],
  },
  {
    id: 34,
    fooditem: "Mayonnaise",
    category: "fats_oils",
    kcalPer100grams: 680,
    macronutrients: [
      {
        name: "fat",
        percentage: 75,
      },
      {
        name: "protein",
        percentage: 1,
      },
      {
        name: "carbs",
        percentage: 1,
      },
    ],
  },
  {
    id: 35,
    fooditem: "Extra virgin olive oil",
    category: "fats_oils",
    kcalPer100grams: 884,
    macronutrients: [
      {
        name: "fat",
        percentage: 100,
      },
    ],
  },
];
