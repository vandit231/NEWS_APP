import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import logo from "../images/Mainlogo.png"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      //fetch api
      const result = await axios.post('http://localhost:8800/api/auth/login', { email, password }, { withCredentials: true });
      setUser(result.data);
      console.log('login successful');
      navigate("/");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center  px-6 md:px-[5px] py-4 bg-blue-950 text-white">

        {/* Updated background color to match the Register component */}
        <img src={logo} alt="image1" style={{ width: "90px", height: "90px", paddingTop: "10px", paddingBottom: "10px",marginRight:"25px" ,marginLeft:"25px"}} />
        <h1 className="text-lg  font-extrabold ">
          <Link to="/">NEWSVERSE</Link>
        </h1>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] bg-gradient-to-b from-blue-950  to-gray-200">
        <div className="flex flex-col justify-center items-center space-y-4 w-full md:w-[25%] bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center">Log In</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-blue-950 outline-0 rounded-md"
            type="text"
            placeholder="Email ID"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-blue-950 outline-0 rounded-md"
            type="password"
            placeholder="Password"
          />
          <button
            onClick={handleLogin}
            className="w-full px-4 py-4 text-lg font-bold text-white bg-blue-950 rounded-md hover:bg-gray-700 transition duration-300"
          >
            Log in
          </button>
          {error && <h3 className="text-red-500 text-sm text-center">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-3 text-blue-950">
            <p>Don't have an account?</p>
            <p className="hover:text-grey-950">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      {/* ... (Footer component) */}
    </>
  );
};

export default Login;
