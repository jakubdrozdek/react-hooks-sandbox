import React, { useCallback, useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

export default function ProductsList() {
  const { items, isLoading, error, refetch } = useContext(ProductsContext);
  const onRefetch = useCallback(() => refetch(), [refetch]);

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <React.Fragment>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      <button onClick={onRefetch}>Refetch products</button>
    </React.Fragment>
  );
}
