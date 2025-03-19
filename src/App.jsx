// App.jsx
import { useState } from "react";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

export default function App() {
  const [token, setToken] = useState(null);
  const [authenticatedUsername, setAuthenticatedUsername] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} setAuthenticatedUsername={setAuthenticatedUsername}/>
      {authenticatedUsername && <p>Authenticated User: {authenticatedUsername}</p>}
    </>
  );
}