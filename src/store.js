import { createStore, combineReducers } from "redux";

const initialState = {
  groceries: [],
  view: "",
}; //still needed or no

const loadReducer = (state = initialState, action) => {
  if (action.type === "LOAD") {
    // console.log("youre hitting my load reducer", action.groceries);
    return {
      ...state,
      groceries: [...state.groceries, action.groceries],
    };
  } else {
    return state;
  }
};

const updateReducer = (state = [], action) => {
  if (action.type === "UPDATE") {
    let updated = state.map((grocery) =>
      grocery.id === action.grocery.id ? action.grocery : grocery
    );
    state = updated; //let's see if this works
  }
  return state;
};

const createReducer = (state = [], action) => {
  if (action.type === "CREATE") {
    // state = {...state, groceries: [...state.groceries, action.grocery ]}
    state = [...state, action.grocery]; //perhaps?
  }
  return state;
};

const setViewReducer = (state = "", action) => {
  if (action.type === "SET_VIEW") {
    state = action.view;
  }
  return state;
};

const reducer = combineReducers({
  load: loadReducer,
  update: updateReducer,
  create: createReducer,
  setView: setViewReducer,
});

const store = createStore(reducer);

export default store;
