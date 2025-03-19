// SignUpForm.jsx
import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    // Reset error messages
    setUsernameError("");
    setPasswordError("");

    // Validation
    if (username.length < 8) {
      setUsernameError("Username must be at least 8 characters.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    }

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const result = await response.json();
      setToken(result.token);
      setError(null); //clear any previous errors
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      {usernameError && <p style={{ color: "red" }}>{usernameError}</p>}
      {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}