import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/authSlice'
import {useNavigate,Link} from 'react-router-dom'
import taskify from '../../assets/Taskify-logo.svg'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { status } = useSelector((state) => state.auth)

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    await dispatch(registerUser({name,email, password}))
    navigate('/auth/login')

  }

  return (
    <div className="flex h-[100vh] flex-col justify-center items-center bg-linear-to-r/oklch from-blue-50 to-indigo-500">
      <div className='w-200 p-15 rounded-2xl shadow-lg bg-gray-50 shadow-indigo-100'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="taskify logo"
            src={taskify}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Register to your account
          </h2>
        </div>

        <div className="mt-10 w-120 mx-auto">
          <form 
          onSubmit={(e)=>handleLogin(e)}
          className="space-y-6">
            <div>
              <label className="text-sm/6 font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e)=>setName(e.target.value)}
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label className="text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e)=>setEmail(e.target.value)}
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                onChange={(e)=>setPassword(e.target.value)}
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
              disabled = {status === 'loading'}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500"
              >
                {status === 'loading'? "Logging in...":"Register"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            have an account?{' '}
            <Link to="/auth/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register