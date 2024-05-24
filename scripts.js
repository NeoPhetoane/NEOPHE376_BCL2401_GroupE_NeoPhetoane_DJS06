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
  return name
    .toLowerCase()
    .split("")
    .some((letter) => letter === "s");
});
console.log(containsS);

// 7. **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.
const mappingNamesToProvinces = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(mappingNamesToProvinces);

// Advanced Exercises (Single `console.log` Execution)

console.log(
  //1. Log Products
  products.map((product) => product.product),

  // 2. Filter by Name Length
  products.filter((product) => product.product.length <= 5),

  // 3. Price Manipulation
  // Filters the products array, keeping only those objects whose 'price' is a non-empty string.
  products
    .filter((product) => String(product.price).trim() !== "")
    // Maps over the filtered array, converting the 'price' property to a float. If the conversion fails, it defaults to 0.
    .map((product) => parseFloat(product.price) || 0)
    //Reduces the mapped array to a single value, which is the sum of all the prices.
    .reduce((acc, price) => acc + price, 0),



  // 4. Concatenate Product Name
 // Reduces the products array to a string, then concatenates all the 'product' names with a space in between.
  products.reduce((acc, product) => acc + " " + product.product, ""),

  // 5. Find Extremes in Prices
 // Iterates through each product, parsing the 'price' property as an integer,
  products.reduce((acc, product) => {
    const price = parseInt(product.price);
    if (acc.highest === undefined || price > acc.highest) {
      acc.highest = price;
    }
    if (acc.lowest === undefined || price < acc.lowest) {
      acc.lowest = price;
    }
    return acc;
  }, { highest: undefined, lowest: undefined }),

  // 6. **Object Transformation

  //// Transforms the products array into an object where each key is a product name
  Object.entries(
    products.reduce((acc, product) => {
      acc[product.product] = {
        name: product.product,
        cost: parseInt(product.price) || 0,
      };
      return acc;
        // Then, it converts this object into an array of objects with a single key-value pair
    }, {})
  ).map(([key, value]) => ({ [key]: value })) // Destructuring and wrapping in object

);
