import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCurrentUser} from "../../redux/authSlice"
import Sidebar from '../../components/Sidebar'

const Landing = () => {
    const {user,status} = useSelector((state)=>state.auth)
  return (
    <div>
      <Sidebar/>
      <div>Welcome : {user.name}</div>
    </div>
  )
}

export default Landing