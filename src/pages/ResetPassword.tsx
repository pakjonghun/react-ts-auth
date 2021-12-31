import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "passwordConfirm":
        setPasswordConfirm(value);
        break;
      default:
        throw new Error("wrong onChange type");
    }
  };

  const token = useParams().id;
  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      const result = await axios.post("/reset", {
        password,
        passwordConfirm,
        token,
      });
      if (result.status < 400) {
        setRedirect(true);
      }
    } catch (err) {
      alert("서버 오류");
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Reset Password</h1>

        <input
          onChange={onChange}
          type="password"
          name="password"
          className="form-control"
          placeholder="name@example.com"
        />
        <input
          onChange={onChange}
          type="password"
          name="passwordConfirm"
          className="form-control"
          placeholder="name@example.com"
        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
