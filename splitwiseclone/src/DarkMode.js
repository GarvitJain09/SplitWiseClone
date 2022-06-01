import React from "react";

const defaultContextData = {
  dark: false,
  toggle: () => {}
};

const DarkModeContext = React.createContext(defaultContextData);
export const useDarkMode = () => React.useContext(DarkModeContext);
