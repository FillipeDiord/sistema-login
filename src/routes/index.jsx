import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { SignIn } from "../pages/signin";
import { SignUp } from "../pages/signup";

function Private({ Item }) {
  const signed = false;

  return signed > 0 ? <Item /> : <SignIn />;
}

export function RoutesApp() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}