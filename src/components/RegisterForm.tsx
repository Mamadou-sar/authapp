'use client'
import Link from "next/link";
import React, {useState} from "react";


export default function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       if(!name || !email || !password) {
           setError('Please fill in all fields');
           return;
       }
try {
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password}),
    });
   if(response.ok) {
        const form = e.target as HTMLFormElement;
        form.reset();
   }
} catch (error) {
    console.error(error);
}
   }
    return (
        <div className='grid  place-items-center h-screen'>
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4">Sign Up</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <input value={name} onChange={(e) => setName(e.target.value) } type="text" placeholder='Full Name'/>
                    <input value={email
                    } onChange={(e) => setEmail(e.target.value)    } type="email" placeholder='Email'/>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'/>
                    <button className='bg-green-600 text-white px-6 py-2 font-bold cursor-pointer'>Register</button>
                    {error && (
                        <div className="bg-red-500 text-white px-3 py-1 text-sm w-fit rounded-md   ">
                            {error}
                        </div>
                    )
                    }
                    <Link href={'/'} className='text-sm mt-3 text-right'>
                        Already have an account ?
                        <span className='text-green-600 font-bold underline'> Login</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}