import React, { createContext, useEffect, useReducer } from "react";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type User = {
  id: string;
  username: string;
  email: string;
  token?: string;
};

type AuthState = {
  user: User | null;
};

type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

type AuthContextType = {
  user: User | null;
  dispatch: React.Dispatch<AuthAction>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  dispatch: () => null,
});

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);

      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      }
    }
  }, []);

  console.log("auth context state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
