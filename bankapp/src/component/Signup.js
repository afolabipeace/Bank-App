import React, { useState } from 'react'
import axios from 'axios'
import baseUrl from './baseUrl'
import { useNavigate } from 'react-router'

const Signup = () => {
    const detail = {
        firstname: '',
        lastname: '',
        address: '',
        town: '',
        gender: '',
        genderF: '',
        genderM: '',
        dob: '',
        email: '',
        password: ''
    }
    // const navigate = useNavigate('')
    const [user, setUser] = useState(detail)
    const handlingInput = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const navigate = useNavigate()
    const submit = (e) => {
        if (user.email == '' || user.password == '' || user.firstname == '' || user.lastname == '' || user.address == '' || user.dob == '' || user.gender == '' ||user.genderF == '' ||user.genderM == '' || user.town == '')
            e.preventDefault()
        axios.post(`${baseUrl}/register`, user).then(res => {
            console.log(res)
            navigate('/signin')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>

            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="shadow rounded-md w-full max-w-md space-y-8 p-6">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-indigo-600"> Sign up to create account </h2>
                    </div>

                    <form className="space-x-6" action="/register" method="POST">
                        <div className="rounded-md ">
                            <input onChange={handlingInput} value={user.firstname} name="firstname" type="text" required className="block w-full rounded-t-md border-0 mb-3 text-gray-900 ring-1 placeholder:text-gray-900 " placeholder="Firstname" />

                            <input onChange={handlingInput} value={user.lastname} name="lastname" type="text" required className="block w-full rounded-t-md border-0 mb-3 text-gray-900 ring-1 placeholder:text-gray-900 " placeholder="Lastname" />

                            <input onChange={handlingInput} value={user.address} name="address" type="text" required className="block w-full rounded-t-md border-0 py-1.5 mb-3 text-gray-900 ring-1 placeholder:text-gray-900 " placeholder="Address" />

                            <input onChange={handlingInput} value={user.town} name="town" type="text" required className="block w-full rounded-t-md border-0 py-1.5 mb-3 text-gray-900 ring-1 placeholder:text-gray-900 " placeholder="Town" />

                            <input onChange={handlingInput} value={user.dob} name="dob" type="date" required className="block w-full rounded-t-md border-0 py-1.5 mb-3 text-gray-900 ring-1 placeholder:text-gray-900 " placeholder="DOB" />

                            <div className="flex items-center mb-3" value={user.gender}>
                                <label htmlFor="email-address" className="sr-only">Gender</label>
                                <input onChange={handlingInput} value={user.genderF} name="gender" type="radio" className="h-4 w-4 rounded border-gray-700 text-indigo-600  focus:ring-indigo-600" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Female</label>

                                <input onChange={handlingInput} value={user.genderM} name="gender" type="radio" className="h-4 w-4 rounded border-gray-700 text-indigo-600  focus:ring-indigo-600" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Male</label>
                            </div>

                            <input onChange={handlingInput} value={user.email} name="email" type="email" required className="block w-full rounded-t-md border-0 py-1.5 mb-3 text-gray-900 ring-1 placeholder:text-gray-900 " placeholder="Email address" />

                            <input onChange={handlingInput} value={user.password} name="password" type="password" required className="block w-full rounded-t-md border-0 py-1.5 mb-3 text-gray-900 ring-1 placeholder:text-gray-900 " placeholder="Password" />

                            <button type="submit" className=" w-full justify-center rounded-md bg-indigo-600 py-2 px-3 font-semibold text-white hover:bg-indigo-800 " onClick={submit}>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup