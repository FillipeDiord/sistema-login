import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { toast } from 'react-toastify';

import {
  Container,
  Label,
  Content,
  LabelSignIn,
  Strong
} from "./styles";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [emailConfig, setEmailConfig] = useState("");
  const [senha, setSenha] = useState("");
  
  const navigate = useNavigate();

  const { SignUp } = useAuth();

  function handleSignUp() {
    if (!email | !emailConfig | !senha) {
      toast.error("Prencha todos os campos");
      return;

    } else if (email !== emailConfig) {
      toast.error("Os e-mails não são iguais");
      return;
    }

    const res = SignUp(email, senha);

    if (res) {
      toast.error(res);
      return;
    }

    toast.success("Usuário cadastrado!");
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConfig}
          onChange={(e) => setEmailConfig(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirme sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
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