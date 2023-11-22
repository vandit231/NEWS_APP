import { Link, useLocation, useNavigate } from "react-router-dom"
import { BsSearch } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"
import logo from "../images/Mainlogo.png"

const Navbar = () => {
  const [prompt, setPrompt] = useState("")
  console.log(prompt);
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()

  const showMenu = () => {
    setMenu(!menu)
  }

  const { user } = useContext(UserContext)

  return (
    <div className="flex items-center justify-between bg-blue-950 px-6">
      {/* Logo div */}
      <div className="flex items-center">
      <img src={logo} alt="image1" style={{ width: "90px", height: "90px", paddingTop: "10px", paddingBottom: "10px",marginRight:"25px" ,marginLeft:"25px" }}/>
        <h1 className="text-lg md:text-xxl font-bold text-slate-200"><Link to="/">NEWSVERSE</Link></h1>
      </div>

      {/* Rest of the Navbar */}
      <div className="flex text-slate-200 justify-center items-center space-x-0">
        <p onClick={() => navigate(prompt ? "?search=" + prompt : navigate("/"))} className="cursor-pointer mr-4"><BsSearch /></p>
        <input onChange={(e) => setPrompt(e.target.value)} className="rounded-lg outline w-[500px] text-slate-200 outline-offset-2 px-3" placeholder="Search " type="text" />
      </div>

      <div className="hidden md:flex items-center text-slate-200 rounded-lg justify-center space-x-2 md:space-x-4">
        {user ?
          <a href="/write" className="relative inline-block  group">
            
            
            <span className="relative bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">Create</span>
          </a>
          : <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow">
          
        <h3><Link to="/login">Login</Link></h3></button>}
        {user ? <div onClick={showMenu}>
          <p className="cursor-pointer relative"><FaBars /></p>
          {menu && <Menu />}
        </div> :<button class="">
  

          <h3><Link to="/register"></Link></h3></button>}
      </div>

      <div onClick={showMenu} className="md:hidden text-lg">
        <p className="cursor-pointer relative"><FaBars /></p>
        {menu && <Menu />}
      </div>

    </div>
  )
}

export default Navbar
