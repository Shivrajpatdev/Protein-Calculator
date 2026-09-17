const foods = [
  { name: "Chicken breast", category: "Meat", protein: 31.0 },
  { name: "Tuna", category: "Seafood", protein: 29.0 },
  { name: "Salmon", category: "Seafood", protein: 20.5 },
  { name: "Eggs", category: "Animal", protein: 12.6 },
  { name: "Milk", category: "Dairy", protein: 3.2 },
  { name: "Curd / yogurt", category: "Dairy", protein: 3.5 },
  { name: "Paneer", category: "Dairy", protein: 18.0 },
  { name: "Tofu", category: "Plant protein", protein: 8.1 },
  { name: "Soy chunks (dry)", category: "Plant protein", protein: 52.0 },
  { name: "Lentils (cooked)", category: "Legume", protein: 9.0 },
  { name: "Chickpeas (cooked)", category: "Legume", protein: 8.9 },
  { name: "Kidney beans / rajma (cooked)", category: "Legume", protein: 8.7 },
  { name: "Green peas", category: "Vegetable", protein: 5.4 },
  { name: "Spinach", category: "Vegetable", protein: 2.9 },
  { name: "Broccoli", category: "Vegetable", protein: 2.8 },
  { name: "Potato", category: "Vegetable", protein: 2.0 },
  { name: "Sweet potato", category: "Vegetable", protein: 1.6 },
  { name: "Oats", category: "Grain", protein: 13.2 },
  { name: "Brown rice (cooked)", category: "Grain", protein: 2.6 },
  { name: "Whole-wheat roti", category: "Grain", protein: 8.5 },
  { name: "Quinoa (cooked)", category: "Grain", protein: 4.4 },
  { name: "Banana", category: "Fruit", protein: 1.1 },
  { name: "Apple", category: "Fruit", protein: 0.3 },
  { name: "Orange", category: "Fruit", protein: 0.9 },
  { name: "Guava", category: "Fruit", protein: 2.6 },
  { name: "Avocado", category: "Fruit", protein: 2.0 },
  { name: "Almonds", category: "Nuts & seeds", protein: 21.2 },
  { name: "Peanuts", category: "Nuts & seeds", protein: 25.8 },
  { name: "Chia seeds", category: "Seeds", protein: 16.5 },
  { name: "Pumpkin seeds", category: "Seeds", protein: 30.2 }
];

const foodSelect = document.getElementById("food");
const gramsInput = document.getElementById("grams");
const form = document.getElementById("proteinForm");
const proteinValue = document.getElementById("proteinValue");
const resultDescription = document.getElementById("resultDescription");
const foodTable = document.getElementById("foodTable");

function populateFoodSelect() {
  foods.forEach((food, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${food.name} — ${food.category}`;
    foodSelect.appendChild(option);
  });
}

function populateFoodTable() {
  foods.forEach((food) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${food.name}</td>
      <td class="category">${food.category}</td>
      <td>${food.protein.toFixed(1)} g</td>
    `;
    foodTable.appendChild(row);
  });
}

function calculateProtein(event) {
  event.preventDefault();

  const grams = Number(gramsInput.value);
  const food = foods[Number(foodSelect.value)];

  if (!Number.isFinite(grams) || grams <= 0 || grams > 10000) {
    proteinValue.textContent = "Check amount";
    resultDescription.textContent = "Enter a number between 1 and 10,000 grams.";
    return;
  }

  const protein = (food.protein * grams) / 100;

  proteinValue.textContent = `${protein.toFixed(1)} g`;
  resultDescription.textContent =
    `${grams} g of ${food.name} contains approximately ${protein.toFixed(1)} g of protein.`;
}

populateFoodSelect();
populateFoodTable();
form.addEventListener("submit", calculateProtein);
