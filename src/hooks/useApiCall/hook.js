import { useCallback, useEffect, useMemo, useReducer } from "react";

import { actionCreators, initialState, reducer } from "./reducer";

const useApiCall = callFn => {
  console.log("useApiCall");
  const [state, dispatch] = useReducer(reducer, initialState);

  const refetch = useCallback(() => {
    console.log("[CALLBACK] refetch");
    dispatch(actionCreators.setShouldCall(true));
  }, []);

  const childProps = useMemo(
    () => {
      console.log("[MEMO] childProps");
      return { ...state, refetch };
    },
    [state, refetch]
  );

  console.log('childProps', childProps);

  useEffect(
    () => {
      if (state.shouldCall) {
        console.log("[EFFECT] Should call");
        dispatch(actionCreators.setIsLoading(true));
        callFn()
          .then(results => dispatch(actionCreators.setItems(results)))
          .catch(err => dispatch(actionCreators.setError(err)))
          .finally(() => {
            dispatch(actionCreators.setIsLoading(false));
            dispatch(actionCreators.setShouldCall(false));
          });
      }
    },
    [state.shouldCall]
  );

  return childProps;
};

export default useApiCall;
