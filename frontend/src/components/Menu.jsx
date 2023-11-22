import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { Link } from "react-router-dom"
import { Navigate, useNavigate } from 'react-router-dom'


const Menu = () => {
const {user}=useContext(UserContext)
const {setUser}=useContext(UserContext)
const navigate=useNavigate()


const handleLogout=async()=>{
  try{
    const res=await axios.post("http://localhost:8800/api/auth/logout",{withCredentials:true})
    console.log("logout successful")
    setUser(null)
    navigate("/login")

  }
  catch(err){
    console.log(err)
  }
}
  return (
    <div className="bg-blue-950 w-[200px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4" style={{borderColor:"White",borderWidth:"2px",borderStyle:"Solid"}}>
    {!user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer "style={{borderColor:"White",borderWidth:"2px",borderStyle:"Solid"}}><Link to="/login">Login</Link></h3>}
    {!user &&<h3 className="text-white text-sm hover:text-gray-500 cursor-pointer" ><Link to="/register">Register</Link></h3>}
    {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer" ><Link to={"/profile/"+user._id}>Account Info</Link></h3>}
    {user &&<h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/write">Create</Link></h3>}
    {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to={"/myblogs/"+user._id}>My Posts</Link></h3>}
    {user &&<h3 onClick={handleLogout} className="text-white text-sm hover:text-gray-500 cursor-pointer">Logout</h3>}

    </div>
  )
}

export default Menu
