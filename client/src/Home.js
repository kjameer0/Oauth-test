import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Callback from "./Callback";

const Home = () => {
  const { loggedIn } = useContext(AuthContext);
  if (loggedIn === true) return <Dashboard />;
  if (loggedIn === false) return <Login />;
  return <></>;
};


export default Home
