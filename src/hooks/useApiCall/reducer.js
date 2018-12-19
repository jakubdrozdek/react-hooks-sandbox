const types = {
  SET_ITEMS: "SET_ITEMS",
  SET_IS_LOADING: "SET_IS_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_SHOULD_CALL: "SET_SHOULD_CALL"
};

export const actionCreators = {
  setItems: newItems => ({ type: types.SET_ITEMS, payload: newItems }),
  setIsLoading: isLoading => ({
    type: types.SET_IS_LOADING,
    payload: isLoading
  }),
  setError: error => ({ type: types.SET_ERROR, payload: error }),
  setShouldCall: shouldCall => ({
    type: types.SET_SHOULD_CALL,
    payload: shouldCall
  })
};

export const initialState = {
  items: [],
  isLoading: false,
  error: null,
  shouldCall: true
};

export const reducer = (state, action) => {
  console.log("[REDUCER]", action, state);
  switch (action.type) {
    case types.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        error: initialState.error
      };
    case types.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case types.SET_ERROR:
      return { ...state, error: action.payload, items: initialState.items };
    case types.SET_SHOULD_CALL:
      return {
        ...state,
        shouldCall: action.payload
      };
    default:
      return state;
  }
};
