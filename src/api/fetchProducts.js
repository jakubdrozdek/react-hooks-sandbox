const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomInt = (min, max) => parseInt(min + Math.random() * (max - min), 10);

export default async () => {
  console.log("[API] Fetching items...");
  await wait(1500);

  const rand = randomInt(0, 50);
  console.log("[API] Random number", rand);

  if (rand > 5) {
    return [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }];
  } else {
    throw new Error("Could not fetch products");
  }
};
