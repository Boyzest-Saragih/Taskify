import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from "../../redux/authSlice"
import { Sidebar, SidebarItem } from '../../components/Sidebar'
import { LayoutDashboard, BarChart3, UserCircle, Boxes, Package, Receipt, Settings, LifeBuoy } from "lucide-react"


const Landing = () => {
  const dispatch = useDispatch()
  const { user, status } = useSelector((state) => state.auth)
  useEffect(()=>{
    const getUser = async()=>{
      await dispatch(getCurrentUser())
    }
    getUser()
  },[])
  return (
    <div className='flex'>
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={24}/> }
          text={"Dashboard"}
          alert
        />
        <SidebarItem icon={<BarChart3 size={24}/> } text={"Statistic"} active/>
        <SidebarItem icon={<UserCircle size={24}/> } text={"Users"} />
        <SidebarItem icon={<Boxes size={24}/> } text={"Inventory"} />
        <SidebarItem icon={<Package size={24}/> } text={"Orders"} alert/>
        <SidebarItem icon={<Receipt size={24}/> } text={"Billings"} />
        <SidebarItem icon={<Settings size={24}/> } text={"Settings"} />
        <SidebarItem icon={<LifeBuoy size={24}/> } text={"Help"} />
      </Sidebar>
      <div className='bg-indigo-200'>Welcome {user.name}</div>
    </div>
  )
}

export default Landing