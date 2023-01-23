import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  Label,
  Content,
  LabelError,
  LabelSignIn,
  Strong
} from "./styles";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [emailConfig, setEmailConfig] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { SignUp } = useAuth();

  function handleSignUp() {
    if (!email | !emailConfig | !senha) {
      setError("Prencha todos os campos");
      return;
    } else if (email !== emailConfig) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = SignUp(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
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
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConfig}
          onChange={(e) => [setEmailConfig(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Confirme sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <Button Text="Inscrever-se" onClick={handleSignUp} />
        <LabelSignIn>
          Já tem uma conta?
          <Strong>
            <Link to="/">&nbsp;Entre</Link>
          </Strong>
        </LabelSignIn>
      </Content>
    </Container>
  );
}