import React from 'react'
import { accessUrl, getTokenFromResponse } from '../spotify'
import { Navigate } from 'react-router-dom'
function Login() {

  const token = getTokenFromResponse().access_token

  window.location.hash = ''


  return (

    <div className='login bluegra w-full h-screen flex justify-center items-center flex-col'>



      <h1 className='iconfont text-[#cdfdff] text-[10rem]'>NEWSICK</h1>
     
      <a href={accessUrl} className="loginBtn text-[#cdfdff] text-[2rem]">
        <span class="top-key"></span>
        <span class="text">Login with <span className='text-[#60ff21]'>spotify</span></span>
        <span class="bottom-key-1"></span>
        <span class="bottom-key-2"></span>
      </a>

    </div>)





}

export default Login