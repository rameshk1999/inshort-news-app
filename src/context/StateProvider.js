// lets setup data layer first
import React, { createContext, useContext, useReducer } from "react";

// this is data layer
export const StateContext = createContext();

// lets build provider
export const StateProvider = ({ children }) => (
  <StateProvider.Provider>{children}</StateProvider.Provider>
);

// we are making global here lets do it.
export const useStateValue = () => useContext(StateContext);
