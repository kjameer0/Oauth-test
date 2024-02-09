import logo from "./logo.svg";
import "./App.css";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import axios from "axios";
import AuthContextProvider from "./AuthContext";
// Ensures cookie is sent
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </header>
    </div>
  );
}
export default App;
