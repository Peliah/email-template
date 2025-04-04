import Image from 'next/image'
import React from 'react'

const NewUser = () => {
    return (
        <div className='bg-white w-[600px] text-center'>
            <div className='w-full flex flex-col items-center justify-center gap-4 p-8 '>
                <Image src={"/Frame 3.svg"} width={100} height={100} className='w-40 h-40' alt='' />
                <p className='text-[#1E1E1E] text-2xl font-semibold break-words'>
                    Hey there! <br /> Welcome to Delve – Your Language Adventure Begins!
                </p>
                <p className='text-[#333333] text-base font-normal'>
                    Get ready to learn a new language through immersive, real-life scenarios. Your first interactive quest is waiting—jump in and start speaking with confidence!
                </p>
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-6 p-8 '>
                <button className='px-20 py-2 bg-[#9C50E2] text-white rounded'>Download the app</button>
                <Image src={"/mockup.svg"} width={100} height={100} className='w-60 h-60' alt='' />
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-6 text-[#27272a] p-8 '>
                <h1 className='text-2xl font-semibold'>Why You&apos;ll love Delve</h1>
                <div className='flex items-start justify-center w-full flex-row flex-wrap'>
                    <div className='w-1/2 flex flex-col gap-3 items-center justify-center p-2'>
                        <Image src={"/image 258.svg"} width={100} height={100} className='w-16 h-12' alt='' />
                        <h1 className='text-lg text-[#1E1E1E] font-semibold'>Learn Through Real-Life Scenarios</h1>
                    </div>
                    <div className='w-1/2 flex flex-col gap-3 items-center justify-center p-2'>
                        <Image src={"/image 260.svg"} width={100} height={100} className='w-16 h-12' alt='' />
                        <h1 className='text-lg text-[#1E1E1E] font-semibold'>Improve Pronunciation with AI Feedback</h1>
                    </div>
                    <div className='w-2/3 flex flex-col gap-3 items-center justify-center p-2'>
                        <Image src={"/image 262.svg"} width={100} height={100} className='w-16 h-12' alt='' />
                        <h1 className='text-lg text-[#1E1E1E] font-semibold'>Progress Through Interactive Quests</h1>
                    </div>
                </div>
            </div>
            <div className='p-8 flex flex-col gap-10 items-center justify-center text-[#5D1A9B]'>
                <p className='text-[#333]'>Need help? Visit our <span className='text-[#5D1A9B]'> Help Center </span> or reach out to <span className='text-[#5D1A9B]'> Support</span>.</p>
                <Image src={"/Framehorizontal.svg"} width={100} height={100} className='w-36 h-auto' alt='' />
                <div>
                    <div className='flex gap-6'>
                        <a href="">FAQ</a>
                        <a href="">CONTACT US</a>
                        <a href="">DOWNLOAD</a>
                    </div>
                </div>
                <div className='flex gap-8'>
                    <a href="http://">
                        <Image src={"/facebook.svg"} alt='' width={100} height={100} className='w-12 h-12' />
                    </a>
                    <a href="http://">
                        <Image src={"/instagram.svg"} alt='' width={100} height={100} className='w-12 h-12' />
                    </a>
                    <a href="http://">
                        <Image src={"/x.svg"} alt='' width={100} height={100} className='w-12 h-12' />
                    </a>
                    <a href="http://">
                        <Image src={"/tiktok.svg"} alt='' width={100} height={100} className='w-12 h-12' />
                    </a>
                </div>
                <div>
                    <p>&copy; 2025 Delve. All Rights Reserved.</p>
                    <div>
                        <a href="http://">Privacy Policy</a> <span> | </span>
                        <a href="http://">Terms and Conditions</a> <span> | </span>
                        <a href="http://">Unsubscribe</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewUser