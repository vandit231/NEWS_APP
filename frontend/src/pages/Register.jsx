import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import logo from "../images/Mainlogo.png";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Fetch API
      const result = await axios.post('http://localhost:8800/api/auth/register', {
        username,
        email,
        password,
      });
      setUsername(result.data.username);
      setEmail(result.data.email);
      setPassword(result.data.password);
      setError(false);
      navigate('/login');
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center  px-6 md:px-[5px] py-4 bg-blue-950 text-white">
       <img src={logo} alt="image1" style={{ width: "90px", height: "90px", paddingTop: "10px", paddingBottom: "10px",marginRight:"25px" ,marginLeft:"25px"}} />
        <h1 className="text-lg  font-extrabold ">
  
        <Link to="/">NEWSVERSE</Link>
         </h1>
       </div>
      <div className="w-full flex justify-center items-center h-[80vh] bg-gradient-to-b from-blue-950  to-gray-200 ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-left">Create an account</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border-2 border-blue-950 outline-0 rounded-md"
            type="text"
            placeholder="Username"
          />
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
            onClick={handleRegister}
            className="w-full px-4 py-4 text-lg font-bold text-white bg-blue-950 rounded-md hover:bg-gray-700"
          >
            Register
          </button>
          {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-3 text-gray-600">
            <p>Already have an account?</p>
            <p className="hover:text-gray-800">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
