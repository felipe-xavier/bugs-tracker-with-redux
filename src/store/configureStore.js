import reducer from "./reducer";
import logger from "./middlewares/logger";
import toast from './middlewares/toast';
import api from "./middlewares/api";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";


const configStore = () => {
  return configureStore({ 
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({destination: "console"}),
      toast,
      api
    ]
  });
};

export default configStore;
