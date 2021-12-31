import axios from "axios";
import { useEffect, useState } from "react";

const Home = ({ user }: { user: any }) => {
  let message = user
    ? `Hellow! ${user.firstName} Welcome`
    : "you are not loggedIn";

  return <div>{message}</div>;
};
export default Home;
