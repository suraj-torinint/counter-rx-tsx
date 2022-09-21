import { createStore } from "redux";
import countReducer from "./countReducer";
// import reducers from "./reducers";

const store = createStore(countReducer);

export default store;
