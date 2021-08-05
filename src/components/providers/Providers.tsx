import React, { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "../AuthProvider";

interface ProvidersProps {
  children?: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => (
  <AuthProvider>
    <Router>{children}</Router>
  </AuthProvider>
);

export default Providers;
