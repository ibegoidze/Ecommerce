import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Products";
import latestProductsReducer from "./LatestProducts";
import categoriesReducer from "./Categories";
import offersReducer from "./Offers";
import mostDemandProductsReducer from "./MostDemandProducts";
import SingleProductReducer from "./SingleProduct/SingleProduct";
import cartReducer from "./Cart/Cart"

const store = configureStore({
  reducer: {
    SingleProduct: SingleProductReducer,
    products: productsReducer,
    latestProducts: latestProductsReducer,
    categories: categoriesReducer,
    offers: offersReducer,
    mostDemandProducts: mostDemandProductsReducer,
    cartItems: cartReducer,
  },
});

export default store;
