import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import store from "./redux/store"
import Register from './pages/Auth/register'
import Login from './pages/Auth/Login'
import Landing from './pages/Landing'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
