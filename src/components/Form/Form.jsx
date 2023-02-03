import { useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };
  return (
    <form>
      <input type="email" onChange={handleChange} value={email} placeholder="Email" name="email" />
      <br />
      <input
        type="password"
        onChange={handleChange}
        value={password}
        placeholder="Password"
        name="password"
      />
      <br />
      <button>Sign Up</button>
    </form>
  );
};
