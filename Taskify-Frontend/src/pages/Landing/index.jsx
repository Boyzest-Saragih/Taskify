import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from "../../redux/authSlice"
import Sidebar from '../Sidebar'


const Landing = () => {
  const dispatch = useDispatch()
  const { user, status } = useSelector((state) => state.auth)
  
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-indigo-200'>Welcome {user.name}</div>
    </div>
  )
}

export default Landing