import { useContext } from "react";
import { AuthContext } from "../contexts/auth";


export function UseAuth() {
  const context = useContext(AuthContext);

  return context;
}