// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//ForEach Basics: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".

names.forEach((name) => console.log(name));
provinces.forEach((province) => console.log(province));

names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console.

const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

// 3. **Name Lengths**: Create a new array using `map` that contains the length of each name.

const namesLength = names.map((name) => name.length);
console.log(namesLength);

// 4. **Sorting**: Use `sort` to alphabetically sort the provinces.

const provincesInAlphabeticalOrder = provinces.sort();
console.log(provincesInAlphabeticalOrder);

// 5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.

const filterProvincesWithCape = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(filterProvincesWithCape);

// 6. **Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.

const containsS = names.map((name) => {
  return name.toLowerCase().split('').some((letter) => letter === "s");
});
console.log(containsS);