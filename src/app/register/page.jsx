'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';


const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);
    // const handleFormSumbit = async (e) => {
    //     e.preventDefault()
    //     setCreatingUser(true);
    //     setError(false);
    //     setUserCreated(false);
    //     const response = await fetch('/api/register',
    //         {
    //             method: 'POST',
    //             body: JSON.stringify({ email, password }),
    //             headers: { 'Content-Type': 'application/json' }
    //         }
    //     )
    //     if (response.ok) {
    //         setUserCreated(true);
    //     }
    //     else {
    //         setError(true);
    //     }

    //     setCreatingUser(false);

    // }
    const handleFormSumbit = async (e) => {
        e.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);

        try {
            const { ok, status } = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (ok) {
                setUserCreated(true);
            } else if (status === 409) {
                setError("User already exists. Please try a different email.");
            } else {
                setError("An unexpected error occurred. Please try again later.");
            }
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Network error. Please try again later.");
        } finally {
            setCreatingUser(false);
        }
    };


    return (
        <section className='mt-8'>
            <h1 className='text-center text-primary text-4xl mb-4'>Register</h1>
            {
                userCreated && (
                    <div className=' mb-4 text-center'>
                        User created.
                        <br />
                        Now you can login {' '}
                        <Link className='underline' href='/login'>login &raquo;</Link>
                    </div>
                )
            }
            {
                error && (
                    <div className=' mb-4 text-center'>
                        Error<br />
                        Please try again later
                    </div>

                )}
            <form className='block max-w-xs mx-auto' onSubmit={handleFormSumbit}>
                <input type="email" placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} value={email}
                    disabled={creatingUser}
                />
                <input type="password" placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={creatingUser}
                />
                <button
                    type='submit'
                    disabled={creatingUser}
                >
                    Register
                </button>
                <div className='my-4 text-center text-gray-500'>
                    or login with provider
                </div>
                <button className='flex gap-2 justify-center'>
                    <Image src="/google1.png" alt="google" width={24} height={24} />
                    login with Google
                </button>

                <div className='text-center my-4 text-gray-500 border-t pt-4' >
                    Existing account ? {' '}
                    <Link className='underline text-gray-500' href='/login'>login hire&raquo;</Link>
                </div>
            </form>
        </section>
    );
};

export default RegisterPage;
