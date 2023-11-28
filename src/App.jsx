import { RoutesApp } from "./routes";
import { AuthProvider } from "./contexts/auth";

import { GlobalStyle } from "./styles/global";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function App() {

  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
      <ToastContainer />
    </AuthProvider>
  );
}
