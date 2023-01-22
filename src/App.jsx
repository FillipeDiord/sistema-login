import { RoutesApp } from "./routes";
import { AuthProvider } from "./contexts/auth";

import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  );
}
