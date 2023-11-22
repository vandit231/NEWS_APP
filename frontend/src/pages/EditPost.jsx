import React from 'react'
import Navbar from '../components/Navbar'
import {ImCross} from 'react-icons/im'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate, useNavigate } from 'react-router-dom'


const EditPost = () => {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [file,setFile] = useState(null)

    //for individual category
    const [cat,setCat] = useState("")
    //for array of category
    const [cats,setCats] = useState([])
    const {user} = useContext(UserContext);
    const postId = useParams().id;
    const navigate = useNavigate();

    const fetchPost = async ()=>{
        try {
            const res = await axios.get("http://localhost:8800/api/posts/"+postId); 
            console.log(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
            setFile(res.data.photo);
            setCats(res.data.categories);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchPost()
    },[postId])

    const deleteCategory=(i)=>{
        let updatedCats=[...cats]
        updatedCats.splice(i)
        setCats(updatedCats)
     }
 
     const addCategory=()=>{
         let updatedCats=[...cats]
         updatedCats.push(cat)
         setCat("")
         setCats(updatedCats)
     }

     const handleUpdate=async (e)=>{
        e.preventDefault()
        const post={
          title,
          desc,
          username:user.username,
          userId:user._id,
          categories:cats
        }
  
        if(file){
          const data=new FormData()
          const filename=Date.now()+file.name
          data.append("img",filename)
          data.append("file",file)
          post.photo=filename
          // console.log(data)
          //img upload
          try{
            const imgUpload=await axios.post("http://localhost:8800/api/upload",data)
            // console.log(imgUpload.data)
          }
          catch(err){
            console.log(err)
          }
        }
        //post upload
       
        try{
          const res=await axios.put("http://localhost:8800/api/posts/"+postId,post,{withCredentials:true})
          navigate("/posts/post/"+res.data._id)
          // console.log(res.data)
  
        }
        catch(err){
          console.log(err)
        }
      }
  
    return (
     
    <div>
    <Navbar/>
    
    <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-3xl text-xl'>Update Post</h1>

        <form className='rounded-xl w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
            <input onChange={(e)=>setTitle(e.target.value)} type='text' placeholder='Post title' className='rounded-xl px-4 py-2 outline-none'/>
            

            <div className='flex flex-col'>
                <div className='flex items-center space-x-4 md:space-x-8'>
                    <input value={cat} onChange={(e)=>setCat(e.target.value)} className='rounded-xl px-4 py-2 outline-none' placeholder='Post category' type='text'/>
                    <div onClick={addCategory} className='bg-blue-950 rounded-xl text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
                </div>

                {/*category*/}
                <div className='flex px-4 mt-3'>
                    {cats?.map((c,i)=>(
                        <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-xl'>
                        <p>{c}</p>
                        <p onClick={()=>deleteCategory(i)} className='text-white rounded-xl bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
                    </div>
                    ))}
                </div>
            </div>
            <textarea onChange={(e)=>setDesc(e.target.value)} value={desc} rows={15} cols={30} className='px-4 py-2 rounded-xl outline-none' placeholder='Enter post description'/>
            <input onChange={(e)=>setFile(e.target.files[0])} type='file' className='px-4'/>
            <button onClick={handleUpdate} className='bg-blue-950 rounded-xl w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Update</button>
        </form>

        </div>
        <Footer/>
    </div>
)}

export default EditPost