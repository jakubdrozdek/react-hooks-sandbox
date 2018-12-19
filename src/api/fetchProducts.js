const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async () => {
  console.log("[API] Fetching items...");
  await wait(1500);

  const rand = parseInt(Math.random() * 50, 10);
  console.log("[API] Random number", rand);

  if (rand > 5) {
    return [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }];
  } else {
    throw new Error("Could not fetch products");
  }
};
