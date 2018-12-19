import React, { useState } from "react";
import Component from "./Component";
import ProductsList from "./ProductsList";
import { ProductsProvider } from "../contexts/ProductsContext";

export default function Container() {
  const [name, setName] = useState("name");
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Container</h3>
      <div>
        Counter: {counter}{" "}
        <button onClick={() => setCounter(prev => prev + 1)}>Add 1</button>
        <Component name={name} onChange={setName} />
      </div>

      <ProductsProvider>
        <h3>Products list</h3>
        <ProductsList />
      </ProductsProvider>
    </div>
  );
}
