import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import Input from '../components/Input'

function Signup() {
    const [error, setError] = useState('');

    const { register, handleSubmit } = useForm()
    const login = async (data) => {
        setError('')
        try {

        } catch (error) {

        }

    }

    return (
        < div className='max-w-full max-h-screen   overflow-y-hidden '  >
            <div className='w-full h-screen  bg-[url(/Loginimg.jpg)]  bg-cover bg-center bg-no-repeat        overflow-hidden  '   >

                <div className=' ml-28 mt-[100px] z-50 shadow-md max-w-lg  bg-gray-400/40 p-4 pb-8 flex-col justify-start  border rounded-lg  '     >
                    <div className='flex justify-center '    >

                    </div>
                    <div className='flex-col justify-center items-center mt-5 '   >
                        <h2 className='text-center font-semibold text-3xl mt-3 mb-2 '  >Create new account</h2>

                        {error && <p className='text-red-500' >{error}</p>}
                        <form onSubmit={handleSubmit(login)} >
                            <div className='max-w-2xl mt-4 flex p-4 gap-6 flex-col ' >
                                <Input label="Name: " type="text" placeholder="Enter your name.." className="  ml-2   " {...register("name", {
                                    required: true,


                                })} />
                                <Input label="Username: " type="text" placeholder="Enter a username.." className="  ml-2   " {...register("username", {
                                    required: true,
                                    validate: {
                                        matchPattern: (value) => /^[^\s]+$/.test(value) ||
                                            "Username must not contain spaces"
                                    }

                                })} />
                                <Input label="EMAil: " type="email" placeholder="Enter your email.." className="  ml-2   " {...register("email", {
                                    required: true,
                                    validate: {
                                        matchpatern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                                            "Email Address must be a valid address"
                                    }

                                })} />
                                <Input label="Password: " type="password" placeholder="Enter your password.." className="  ml-2   " {...register("password", {
                                    required: true,


                                })} />

                                <Button childern='Create account' className=' ml-5 mt-4    ' />



                            </div>


                        </form>


                    </div>
                </div   >


            </div>

        </div>

    )
}

export default Signup
