import axios from "axios";
import React, { FC, SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";

const Login: FC<{ setUser: Function }> = ({ setUser }) => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const response = await axios.post("/login", {
      password,
      email,
    });

    if (response.status < 400) {
      setUser(response.data);
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
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
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please login</h1>

        <input
          onChange={onChange}
          type="email"
          name="email"
          className="form-control"
          placeholder="name@example.com"
        />
        <input
          onChange={onChange}
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
