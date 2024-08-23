import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import Input from '../components/Input';

function Login() {
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();

    const login = async (data) => {
        setError('');
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (response.ok) {
                console.log('Login successful', result);
            } else {
                setError(result.error || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred');
            console.error(err);
        }
    };

    return (
        <div className='max-w-full max-h-screen overflow-y-hidden'>
            <div className='w-full h-screen bg-[url(/Loginimg.jpg)] bg-cover bg-center bg-no-repeat overflow-hidden'>
                <div className='ml-28 mt-[100px] z-50 shadow-md max-w-lg bg-gray-400/40 p-4 pb-8 flex-col justify-start border rounded-lg'>
                    <h2 className='text-center font-semibold text-3xl mt-3 mb-2'>Login to your account</h2>
                    {error && <p className='text-red-500'>{error}</p>}
                    <form onSubmit={handleSubmit(login)}>
                        <div className='max-w-2xl mt-4 flex p-4 gap-6 flex-col'>
                            <Input
                                label="Email: "
                                type="email"
                                placeholder="Enter your email.."
                                {...register('email', {
                                    required: true,
                                    validate: {
                                        matchPattern: (value) =>
                                            /^[\w\.\-]+@\w+(\.\w+){1,}$/.test(value) || 'Invalid email address',
                                    },
                                })}
                            />
                            <Input
                                label="Password: "
                                type="password"
                                placeholder="Enter your password.."
                                {...register('password', { required: true })}
                            />
                            <Button  childern='Login'   className='ml-5 mt-4' />
                        </div>
                    </form>
                    <p className='text-center text-base'>Don't have an account?&nbsp;
                        <button   className='text-sky-300 hover:underline'>Sign-up</button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;