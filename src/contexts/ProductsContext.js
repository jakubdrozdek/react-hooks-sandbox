import React, { useCallback } from "react";
import fetchProducts from "../api/fetchProducts";
import useApiCall from "../hooks/useApiCall/hook";

const ProductsContext = React.createContext();
const { Provider, Consumer } = ProductsContext;

const ProductsProvider = ({ children }) => {
  const fetchProductsFromApi = useCallback(() => fetchProducts(), []);
  const childProps = useApiCall(fetchProductsFromApi);

  return <Provider value={childProps}>{children}</Provider>;
};

export { ProductsProvider, Consumer as ProductsConsumer, ProductsContext };

/*
 * Standard approach, without reducers
 */

// function useApiCall(callFn) {
//   const [items, setItems] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [shouldCall, setShouldCall] = useState(true);

//   const refetch = useCallback(() => {
//     console.log("[CALLBACK] refetch");
//     setShouldCall(true);
//   }, []);

//   const childProps = useMemo(
//     () => {
//       console.log("[MEMO] childProps");
//       return { items, error, isLoading, refetch };
//     },
//     [items, error, isLoading]
//   );

//   console.log(childProps);

//   useEffect(
//     () => {
//       if (shouldCall) {
//         setIsLoading(true);
//         callFn()
//           .then(results => setItems(results))
//           .catch(err => setError(err))
//           .finally(() => {
//             setIsLoading(false);
//             setShouldCall(false);
//           });
//       }
//     },
//     [shouldCall]
//   );

//   return childProps;
// }
