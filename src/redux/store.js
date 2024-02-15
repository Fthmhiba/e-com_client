import { configureStore } from "@reduxjs/toolkit";

import {
  adminAuthReducer,
  adminCartReducer,
} from "./admin/reducer";

const store = configureStore({
  reducer: {
    adminAuthReducer,
    adminCartReducer,
  },
});

export default store;
