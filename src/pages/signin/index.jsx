import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

import { toast } from 'react-toastify';

import {
  Container,
  Label,
  Content,
  LabelSignUp,
  Strong
} from "./styles";

export function SignIn() {
  const { SignIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (!email | !senha) {
      toast.error("Prencha todos os campos");
      return;
    }

    const res = SignIn(email, senha);

    if (res) {
      toast.error(res);
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
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