import { useEffect, useRef, useContext, useState } from "react";
import { redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;
axios.defaults.withCredentials = true;

const Callback = () => {
  const called = useRef(false);
  const { checkLoginState, loggedIn, user } = useContext(AuthContext);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      console.log("hiu");
      if (loggedIn === false) {
        try {
          if (called.current) return; // prevent rerender caused by StrictMode
          called.current = true;
          const res = await axios.get(
            `${serverUrl}/auth/token${window.location.search}`
          );
          console.log("response: ", res);
          checkLoginState();
          setShouldRedirect(true);
        } catch (err) {
          console.error(err);
          setShouldRedirect(true);
        }
      } else if (loggedIn === true) {
        setShouldRedirect(true);
      }
    })();
  }, [checkLoginState, loggedIn, user]);

  if (shouldRedirect) {
    return <Navigate to="/" />;
  }
  return <a href="/">Go Home</a>;
};

export default Callback;
