import React, { useState } from 'react'
import axios from 'axios'
import baseUrl from './baseUrl'
import { useNavigate } from 'react-router'

const Signin = () => {
const navigate = useNavigate()
  const details = {
    email: '',
    password: ''
  }
  const [users, setUsers] = useState(details)

  const handlingInput = (e) => {
    const { name, value } = e.target
    setUsers({ ...users, [name]: value })
  }
  const signin = (e) => {
    e.preventDefault()
    axios.post(`${baseUrl}/login`,users).then(res => {
    alert('jbjb')
      console.log(res)
      if (res.data.success) {
        localStorage.setItem('token', res.data.token)
        navigate('/dashboard')
      }
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <>

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="shadow rounded-md w-full max-w-md space-y-8 p-6">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"> Sign in to your account </h2>
          </div>

          <form className="mt-8 space-y-6" action="" method="POST">
            <div className=" rounded-md">
              <input onChange={handlingInput} value={users.email} name="email" type="email" required className="block w-full rounded-t-md border-0 py-1.5 mb-3 text-gray-900 ring-1 placeholder:text-gray-900 " placeholder="Email address" />

              <input onChange={handlingInput} value={users.password} name="password" type="password" required className="block w-full rounded-t-md border-0 py-1.5 mb-3 text-gray-900 ring-1 placeholder:text-gray-900 " placeholder="Password" />

              <div>
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-700 text-indigo-600  focus:ring-indigo-600" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me</label>
              </div>
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>

              <button type="submit" className=" w-full justify-center rounded-md bg-indigo-600 py-2 px-3 font-semibold text-white hover:bg-indigo-800 " onClick={signin}>Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin