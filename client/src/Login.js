
import axios from 'axios';
const serverUrl = process.env.REACT_APP_SERVER_URL;
axios.defaults.withCredentials = true;

const Login = () => {
  const handleLogin = async () => {
    try {
      // Gets authentication url from backend server
      const { data: { url } } = await axios.get(`${serverUrl}/auth/url`);
      // Navigate to consent screen
      window.location.assign(url);
    } catch (err) {
      console.error(err);
    }
  }
  return <>
  <h3>Login to Dashboard</h3>
  <button className="btn" onClick={handleLogin} >Login</button>
  </>
};

export default Login
