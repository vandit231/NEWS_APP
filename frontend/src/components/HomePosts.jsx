import React from 'react'
// import { IMGURL } from '../url.js'

const HomePosts = ({post}) => {
    return (
    <div className="w-full border-double border-4 border-white flex mt-10 bg-white space-x-4 "style={{borderColor:"rgb(23 37 84)",borderWidth:"5px",borderStyle:"solid",padding:"10px"}}>
      {/* left */}

      <div className=" w-[35%] h-[200px] flex justify-center items-center me-3">
        <img src={post.photo} alt="" className="h-full w-full object-cover" style={{paddingTop:"6vh"}}/>
      </div>

      {/* right */}
      <div className="flex flex-col w-[65%]">

        <h1 className=" text-xl text-blue-950 font-bold md:mb-2 mb-1 md:text-2xl ">{post.title}</h1>
        
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>

          <div className="flex space-x-2 text-sm">
             <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
             <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
          </div>

        </div>
          <p className="text-sm md:text-lg">{post.desc}</p>
        </div>
    </div>
    )
  }
export default HomePosts