const { configureStore } = require("@reduxjs/toolkit");
import CartReducer from "./CartSlice";
const AppStore = configureStore({
  reducer: {
    cart: CartReducer,
  }
});


export default AppStore;