import axios from "axios";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [notify, setNotify] = useState<{
    show: boolean;
    error: string;
    message: string;
  }>({
    error: "",
    show: false,
    message: "",
  });
  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      await axios.post("/forget", { email });
      setNotify({ error: "", message: "send email", show: true });
    } catch (err) {
      setNotify({ error: "error", message: "fail to send email", show: true });
    }
  };

  let info;
  if (notify.show) {
    info = (
      <div
        role={"alert"}
        className={notify.error ? "alert-danger" : "alert-success"}
      >
        {notify.message}
      </div>
    );
  }

  return (
    <div className="form-container">
      {info}
      <form onSubmit={onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
          value={email}
          type="email"
          name="email"
          className="form-control"
          placeholder="name@example.com"
        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          FindPassword
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
