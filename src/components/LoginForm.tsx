import React from 'react';
import Link from "next/link";

function LoginForm() {
    return (
        <div className='grid  place-items-center h-screen'>
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4">Sign In  </h1>
                <form action="" className='flex flex-col gap-3'>
                    <input type="text" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button className='bg-green-600 text-white px-6 py-2 font-bold cursor-pointer'>Login</button>
                    <div className="bg-red-500 text-white px-3 py-1 text-sm w-fit rounded-md   ">
                        Error message
                    </div>
                    <Link href={'/register'} className='text-sm mt-3 text-right'>
                        Don&#39;t have an account ?
                        <span className='text-green-600 font-bold underline'> Register</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;