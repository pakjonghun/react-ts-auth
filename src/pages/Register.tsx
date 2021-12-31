import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [redirect, setRedircet] = useState<boolean>(false);

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const response = await axios.post("/register", {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
    });

    if (response.status < 400) {
      setRedircet(true);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordConfirm":
        setPasswordConfirm(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        throw new Error("no register type");
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <input
          onChange={onChange}
          type="email"
          className="form-control"
          placeholder="name@example.com"
          required={true}
          name="email"
        />
        <input
          onChange={onChange}
          type="password"
          className="form-control"
          placeholder="Password"
          required={true}
          name="password"
        />
        <input
          onChange={onChange}
          type="password"
          className="form-control"
          placeholder="PasswordConfirm"
          required={true}
          name="passwordConfirm"
        />
        <input
          onChange={onChange}
          className="form-control"
          placeholder="firstName"
          required={true}
          name="lastName"
        />
        <input
          onChange={onChange}
          name="firstName"
          className="form-control"
          placeholder="firstName"
          required={true}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default Register;
