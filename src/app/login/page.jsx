'use client';
import { useState } from "react";
import Image from 'next/image'
import { signIn } from 'next-auth/react'; // Змінив імпорт
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);
    const handleFormSubmit = async (e) => {
        await signIn('credentials', { email, password }) // Використовуємо правильний signIn
        e.preventDefault();
        setLoginInProgress(true);
        const response = await fetch(`/api/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {

        }
        setLoginInProgress(false);
    }
    return (
        <section className='mt-8'>
            <h1 className='text-center text-primary text-4xl mb-4'>Login</h1>
            <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={loginInProgress} />
                <input type="password" name="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} disabled={loginInProgress} />
                <button type="submit" disabled={loginInProgress}>Login</button>
                <div className='my-4 text-center text-gray-500'>
                    or login with provider
                </div>
                <button className='flex gap-2 justify-center'>
                    <Image src="/google1.png" alt="google" width={24} height={24} />
                    Login with Google
                </button>
            </form>
        </section>
    )
}

export default LoginPage
