import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "../images/Mainlogo.png"; 
const ContactUs = () => {
  const [mail, setMail] = useState("");

  useEffect(() => {
    localStorage.setItem('mailKey', JSON.stringify(mail));
  }, [mail]);
  const [problem, setProblem] = useState("");

  useEffect(() => {
    localStorage.setItem('problemKey', JSON.stringify(problem));
  }, [problem]);

  return (
    <>
      <div className="flex items-center  px-6 md:px-[5px] py-4 bg-blue-950 text-white">
       <img src={logo} alt="image1" style={{ width: "90px", height: "90px", paddingTop: "10px", paddingBottom: "10px",marginRight:"25px" ,marginLeft:"25px"}} />
        <h1 className="text-lg  font-extrabold ">
  
        <Link to="/">NEWSVERSE</Link>
         </h1>
       </div>
    <div className="w-full flex justify-center items-center h-[80vh] bg-gradient-to-b from-blue-950  to-gray-200">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-left">Contact Us</h1>
        <input
          onChange={(e) => setMail(e.target.value)}
          className="w-full px-4 py-2 border-2 border-blue-950 outline-0 rounded-md"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => setProblem(e.target.value)}
          className="w-full px-4 py-2 border-2 border-blue-950 outline-0 rounded-md"
          type="password"
          placeholder="Provide Your feedback"
        />
        <button
          className="w-full px-4 py-4 text-lg font-bold text-white bg-blue-950 rounded-md hover:bg-gray-700"
        >
          Send
        </button>
      </div>
    </div>
  </>
  )
}

export default ContactUs
