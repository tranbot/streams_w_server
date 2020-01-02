import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; // import { reducer as formReducer } from 'redux-form'; renames the 'reducer' that is imported to 'formReducer'
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer
});
