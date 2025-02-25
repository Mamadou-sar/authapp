export default function UserInfo() {
    return (
        <div className='grid place-items-center h-screen'>
            <div className='shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6'>

                <div> Name: <span className='font-bold'>John Doe    </span></div>
                <div> Email: <span className='font-bold'>John@gmail.com    </span></div>
                <button className='bg-green-600 rounded text-white px-6 py-2 font-bold cursor-pointer mt-3'>Logout</button>

            </div>


        </div>
    );
}