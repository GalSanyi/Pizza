'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [createdUser, setCreatedUser] = useState(false);
    const [error, setError] = useState(false);
    const hendleFormSubmit = async (e) => {
        e.preventDefault();
        setCreatingUser(true);
        setError(false);
        setCreatedUser(false);

        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                if (response.ok) {
                    setCreatedUser(true);
                } else {
                    setError(true);
                }
            })
            .catch(error => {
                console.error('Error during registration:', error);
                setError(true);
            })
            .finally(() => {
                setCreatingUser(false);
            });
    };
    return (
        <section className='mt-8'>
            <h1 className='text-center text-primary text-4xl mb-4'>Register</h1>
            {createdUser && (
                <div className='my-4 text-center'>
                    User created. Now you can <Link className='underline' href='/login'>login &raquo;</Link>.
                </div>
            )}
            {error && (
                <div className='my-4 text-center'>
                    Please try again later.
                </div>
            )}
            <form className='block max-w-xs mx-auto' onSubmit={hendleFormSubmit}>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={creatingUser} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} disabled={creatingUser} />
                <button type='submit' disabled={creatingUser}>Register</button>
                <div className='my-4 text-center text-gray-500'>
                    or login with provider
                </div>
                <button className='flex gap-2 justify-center '>
                    <Image src="/google1.png" alt="google" width={24} height={24} />
                    Login with Google
                </button>
                <div className='text-center my-4 text-gray-500 border-t pt-4' >
                    Existing account? {''}
                    <Link className='underline text-gray-500' href='/login'>Login here&raquo;</Link></div>
            </form>
        </section>
    )
}

export default RegisterPage
