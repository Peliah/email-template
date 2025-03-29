import Image from 'next/image'
import React from 'react'

const SubscriptionMail = () => {
    return (
        <div className='bg-white w-[600px] text-center'>
            <div className='w-full flex flex-col items-center justify-center gap-4 p-8 '>
                <Image src={"/Frame 3.svg"} width={100} height={100} className='w-40 h-40' alt='' />
                <p className='text-[#1E1E1E] text-2xl font-semibold break-words'>
                    You’re officially subscribed to Delve’s
                    newsletter!
                </p>
                <p className='text-[#333333] text-base font-normal'>
                    Get ready for exciting updates, language hacks, and exclusive challenges! With fun word-matching games and 3D quests, learning a new language has never been this engaging. Stay tuned—and why not start your first quest now?
                </p>
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-6 p-8 '>
                <button className='px-20 py-2 bg-[#9C50E2] text-white rounded'>Download the app</button>
                <Image src={"/mockup.svg"} width={100} height={100} className='w-60 h-60' alt='' />
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-6 text-[#27272a] p-8 '>
                <h1 className='text-2xl font-semibold'>Why people love Delve</h1>
                <div className='flex items-start justify-center w-full flex-row flex-wrap'>
                    <div className='w-1/2 flex flex-col gap-3 items-center justify-center p-2'>
                        <Image src={"/image 258.svg"} width={100} height={100} className='w-16 h-12' alt='' />
                        <h1 className='text-lg text-[#1E1E1E] font-semibold'>Match words, boost fluency</h1>
                        <p>Strengthen your vocabulary through smart word-pairing exercises</p>
                    </div>
                    <div className='w-1/2 flex flex-col gap-3 items-center justify-center p-2'>
                        <Image src={"/image 260.svg"} width={100} height={100} className='w-16 h-12' alt='' />
                        <h1 className='text-lg text-[#1E1E1E] font-semibold'>Play interactive 3D quests</h1>
                        <p>Learn by completing fun challenges in an engaging virtual world</p>
                    </div>
                    <div className='w-2/3 flex flex-col gap-3 items-center justify-center p-2'>
                        <Image src={"/image 262.svg"} width={100} height={100} className='w-16 h-12' alt='' />
                        <h1 className='text-lg text-[#1E1E1E] font-semibold'>Multiple languages at your fingertips</h1>
                        <p>Learn Spanish, French, German, and more! Build vocabulary, improve pronunciation, and master grammar.</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between font-bold text-left gap-20 p-8 '>
                <div className='text-[#8324DB] text-4xl '>
                    <div>“</div>
                    <div className='pb-6'>My favorite way to learn a language right now!</div>
                    <div className='flex text-[#1E1E1E] font-bold text-base items-center gap-3'>
                        <Image src={"/person.svg"} width={100} height={100} className='w-12 h-12' alt='' />
                        <p>Omar A, Spanish Learner</p>
                    </div>
                </div>
                <Image src={"/phone.svg"} width={100} height={100} className='w-36 h-auto' alt='' />
            </div>
            <div className='px-6 py-28 flex flex-col bg-[#F3E9FB] gap-2 text-[#1E1E1E]'>
                <h1 className='font-semibold text-4xl '>Start speaking with Delve</h1>
                <p className='font-normal text-base'>Don’t just learn a language — live it.</p>
                <div>
                    <button className='bg-[#8324DB] font-normal text-base text-white p-5 rounded-4xl'>Start Today</button>
                </div>
            </div>
            <div className='p-8 flex flex-col gap-10 items-center justify-center text-[#5D1A9B]'>
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

export default SubscriptionMail