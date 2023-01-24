import { useRef } from 'react'
import Logo from './../assets/snackmart.png'

export default function Login() {

    let username = useRef()
    let password = useRef()

    return (
        <>
            {/* Card */}
            <div className='flex justify-center items-center h-screen'>
                <div className='flex items-center bg-slate-200 shadow-lg rounded-lg border border-neutral-300'>
                    <div className=''>
                        <img src={Logo} className="w-96 rounded-lg" alt="Logo" />
                    </div>
                    <div className='px-4'>
                        {/* Username */}
                        <div className="flex justify-center">
                            <div className="mb-3 xl:w-96">
                                <label for="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
                                    Username
                                </label>
                                <input ref={username}
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput1"
                                    placeholder="Username"/>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex justify-center">
                            <div className="mb-3 xl:w-96">
                                <label for="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
                                    Password
                                </label>
                                <input ref={password}
                                    type="password"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal        text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput1"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <div className="flex space-x-2 justify-start pt-5">
                            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}