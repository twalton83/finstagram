import React, { createContext, useReducer, useEffect } from 'react';
import { reducer } from './UserReducer';

export const UserContext = createContext<ContextType | null>(null);

const initialState = {
  user: {},
};

export function UserProvider(props: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export interface ProviderProps {
  children: React.ReactNode;
}

interface ContextType {
  state: {
    user: any;
  };
  dispatch: React.Dispatch<{ type: string; payload: any }>;
}
