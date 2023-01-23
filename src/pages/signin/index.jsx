import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  Label,
  Content,
  LabelError,
  LabelSignUp,
  Strong
} from "./styles";

export function SignIn() {
  const { SignIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (!email | !senha) {
      setError("Prencha todos os campos");
      return;
    }

    const res = SignIn(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");

  };

  return (
    <Container>
      <Label>Sistema de Login</Label>
      <Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <LabelSignUp>
          Não tem uma conta?
          <Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </Strong>
        </LabelSignUp>
      </Content>
    </Container >
  );
}