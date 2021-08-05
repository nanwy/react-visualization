import React, { ReactNode } from "react";
import { AuthProvider } from "./auth/auth-context";

const ClientContext = React.createContext({ a: 0 });

export const AppProviders = ({ children }: { children: ReactNode }) => {
  // const queryClient = new QueryClient();

  return (
    <ClientContext.Provider value={{ a: 5 }}>
      <AuthProvider>{children}</AuthProvider>
    </ClientContext.Provider>
  );
};

export {};
