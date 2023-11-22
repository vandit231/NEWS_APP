import React from 'react'
import { IMGURL } from '../url'

const ProfilePosts = ({p}) => {
    return (

        <div className="bg-blue-950 w-full flex mt-15 space-x-4  ">
          {/* left */}
          <div className="w-[35%] h-[200px] flex justify-center items-center">
            <img src={IMGURL + p.photo} alt="" className="h-full w-full object-cover"/>
          </div>
    
          {/* right */}
          <div className="flex flex-col w-[65%]">
    
            <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">{p.title}</h1>
            
            <div className="flex mb-10 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
              <p>@{p.username}</p>
    
              <div className="flex space-x-2 text-sm">
                <p>{new Date(p.updatedAt).toString().slice(0,15)}</p>
                <p>{new Date(p.updatedAt).toString().slice(16,24)}</p>
              </div>
    
            </div>
            
            <p className="text-sm md:text-lg mb-15 "> </p>
    
          </div>
        </div>
        )
}

export default ProfilePosts