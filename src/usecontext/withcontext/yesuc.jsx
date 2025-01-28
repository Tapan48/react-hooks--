import React, { useState, createContext } from "react";

import { Login } from './yeslogin';
import { User } from './yesuser';

export const AppContext = createContext(null);
export const Yesuc = () => {


const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}
