import React from 'react'
import { SidebarElement, SidebarItem } from '../../components/Sidebar'
import { LayoutDashboard, BarChart3, UserCircle, CalendarClock, Settings, LifeBuoy } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"


const Sidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <SidebarElement>
            <SidebarItem
                icon={<LayoutDashboard size={24} />}
                text={"Dashboard"}
                active={location.pathname === "/"}
                onClick={() => navigate("/")}
            />
            <SidebarItem
                icon={<BarChart3 size={24} />}
                text={"Statistic"}
                active={location.pathname === "/statistic"}
                onClick={() => navigate("/statistic")} />
            <SidebarItem
                icon={<CalendarClock size={24} />}
                text={"Tasks"}
                active={location.pathname === "/tasks"}
                onClick={() => navigate("/tasks")}
            />
            <SidebarItem
                icon={<UserCircle size={24} />}
                text={"Users"}
                active={location.pathname === "/users"}
                onClick={() => navigate("/users")}
            />
            <SidebarItem
                icon={<Settings size={24} />}
                text={"Settings"}
                active={location.pathname === "/settings"}
                onClick={() => navigate("/settings")}
            />
            <SidebarItem
                icon={<LifeBuoy size={24} />}
                text={"Help"}
                active={location.pathname === "/help"}
                onClick={() => navigate("/help")}
            />
        </SidebarElement>
    )
}

export default Sidebar