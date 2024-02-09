import { useEffect, useRef, useContext } from "react";
import { redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;
axios.defaults.withCredentials = true;

const Callback = () => {
  const called = useRef(false);
  const { checkLoginState, loggedIn } = useContext(AuthContext);
  useEffect(() => {
    (async () => {
      if (loggedIn === false) {
        try {
          if (called.current) return; // prevent rerender caused by StrictMode
          called.current = true;
          const res = await axios.get(
            `${serverUrl}/auth/token${window.location.search}`
          );
          console.log("response: ", res);
          checkLoginState();
          redirect("/");
        } catch (err) {
          console.error(err);
          redirect("/");
        }
      } else if (loggedIn === true) {
        redirect("/");
      }
    })();
  }, [checkLoginState, loggedIn]);
  return <button onClick={() => redirect("")}>Go Home</button>;
};

export default Callback;
