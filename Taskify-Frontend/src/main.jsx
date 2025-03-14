import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import store from "./redux/store"
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Landing from './pages/Landing'
import Statistic from './pages/Statistic'
import Tasks from './pages/Tasks'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Help from './pages/Help'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/register" element={<Register/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="/statistic" element={<Statistic/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/help" element={<Help/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
