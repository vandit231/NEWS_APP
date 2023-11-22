import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState,useEffect} from "react"
import { useContext } from "react"
import { UserContext} from "../context/UserContext"
import axios from "axios";
import {useParams} from "react-router-dom"
import { Navigate, useNavigate } from 'react-router-dom'


const Profile = () => {

  const navigate = useNavigate();

  const param = useParams().id;
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [updated,setUpdated] = useState(false);
  const [posts,setPosts] = useState([]);
  const {user} = useContext(UserContext)

  const fetchProfile = async() =>{
    try {
      const res = await axios.get("http://localhost:8800/api/users/"+user._id);
      setUsername(res.body.username);
      setEmail(res.body.email);
      setPassword(res.body.password);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchProfile ();
  },[param])

  const handleUpdate = async () =>{
    setUpdated(false);
    try {
        const res = await axios.put("http://localhost:8800/api/users/"+user._id,{username,email,password},{withCredentials:true});
        console.log(res.data);
        setUpdated(true);
    } catch (error) {
      console.log(error);
      setUpdated(false);
    }
  }

  const handleDelete = async () =>{
    try{

      const res = await axios.delete("http://localhost:8800/api/users/"+user._id,{withCredentials:true});
      setUser(null);
      navigate("/");


    }catch (error) {
      console.log(error);
    }
  }

  const fetchUserPosts=async ()=>{
    try{
      const res=await axios.get(URL+"/api/posts/user/"+user._id)
      // console.log(res.data)
      setPosts(res.data)
  
  
    }
    catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{
    fetchUserPosts()
  },[param])

  return (
    <div>
      <Navbar/>
      <div className='bg-gradient-to-b from-blue-950  to-gray-200 px-0 md:px-[200px] mt-0 flex md:flex-row flex-col-reverse md:items-start items-center relative left-0 mb-0'>
        {/* <div className='flex flex-col md:w-[70%] w-full mt-8 md:mt-0'>
          <h1 className='text-xl font-bold mb-4'>Your Posts</h1>
            {posts?.map((p)=>(
              <ProfilePosts key={p._id} p={p}/>
            ))}
        </div> */}

        <div className='md:sticky top-0 mt-10 flex justify-start md:justify-end items-center md:w-[30%] w-full md:items-end'>
         
          <div className=" flex flex-col space-y-4 items-start">  
            <h1 className="text-[40px] font-bold mb-2 text-white mt-3" style={{fontFamily:"Manrope"}}>Account Info</h1>
            <input onChange={(e)=>setUsername(e.target.value)} value={username} className="outline-none px-4 py-2 rounded-xl text-gray-500 w-[160%] " placeholder="Username" type="text"/>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className="outline-none mt-8 px-4 py-2 rounded-xl text-gray-500 w-[160%]" placeholder="Email " type="email"/>
            <div className="flex items-center space-x-4 mt-10">
            <button onClick={handleUpdate} className="text-white font-semibold bg-blue-950 rounded-xl mt-10 px-4 py-2 hover:text-white hover:bg-gray-800">Update</button>
            <button onClick={handleDelete} className="text-white font-semibold bg-blue-950 rounded-xl px-4 mt-10 py-2 hover:text-white hover:bg-gray-800">Delete</button>
          </div>
          {updated && <h3 className="text-green-500 text-sm text-center mt-4">user updated successfully!</h3>}
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
      <Footer/>
    </div>
  )
}

export default Profile