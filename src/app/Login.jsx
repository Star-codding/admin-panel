'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Login() {
    const router = useRouter()
    const handle = (e)=>{
        e.preventDefault();

        let email = e.target.email.value
        let password = e.target.password.value

        if(email === '' && password === ''){
            alert("Fill the Inputs")
        }else if(email == 'admin@gmail.com' && password =='admin'){
            setTimeout(()=>{
                router.push("/dashboard")
            },1000)
        }else{
            alert("Incorrect email and password")
        }
        
    }


    return (
        <div>
            <div className=' h-[100vh]  w-full border bg-amber-300' >
                <form action="" onSubmit={handle} className='border bg-white p-[15px] rounded-[20px] mt-[10%] mx-auto w-[700px]'>
                    <div className='p-[5px] font-[bold]'>
                        <p className=''>Login to your account</p>
                        <p>Enter your email below to login to your account</p>
                    </div>
                    <div className='p-[5px]' >
                        <label htmlFor="" className='p-[15px_0px]'>Email</label><br />
                        <input type="email" placeholder='Enter your email' name='email'  className='border mt-[5px] p-[3px] w-full'/>
                    </div>
                    <div className='p-[5px]'>
                        <label className='p-[15px_0px]' >Password</label><br />
                        <input type="text" name='password' placeholder='Enter your email' className='border mt-[5px] p-[3px] w-full' />
                    </div>

                    <button className='p-[5px] mt-[15px] mx-auto hover:bg-black hover:text-white cursor-pointer rounded-[10px] border'>Submit</button>

                </form>
            </div>
        </div>
    )
}
