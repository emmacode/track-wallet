import { combineReducers } from "redux";

import auth from "./authModule/reducer";
import utils from "./utilsModule/reducer";

const createReducer = asyncReducers =>
  combineReducers({
    auth,
    utils,
    ...asyncReducers
  });

export default createReducer;
