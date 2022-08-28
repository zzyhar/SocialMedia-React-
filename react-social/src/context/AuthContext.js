import React, { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "630098991db237870aaa7424",
    username: "zahar",
    email: "zahar@gmail.com",
    password: "$2b$10$QjepH45Lvm.3sFnN0aYoc.qlfq98qKlABJG4R59E/cU9fkKYyVHly",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    createdAt: { $date: { $numberLong: "1660983449871" } },
    updatedAt: { $date: { $numberLong: "1660983449871" } },
    __v: { $numberInt: "0" },
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
