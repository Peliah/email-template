import Image from 'next/image'
import React from 'react'

const SubscriptionCancel = () => {
    return (
        <div className='bg-white w-[600px] text-center'>
            <div className='w-full flex flex-col items-center justify-center gap-4 p-8 '>
                <Image src={"/Frame 3.svg"} width={100} height={100} className='w-40 h-40' alt='' />
                <p className='text-[#1E1E1E] text-2xl font-semibold break-words'>
                    You’re officially subscribed to Delve’s
                    newsletter!
                </p>
                <p className='text-[#333333] text-base font-normal'>
                    We are sorry to see you go. If you have any questions about your subscription, please visit our help center
                </p>
                <p className='text-[#333333] text-base font-normal'>
                    If you changed your mind, or cancelled by mistake, you can always reactivate your subscription from the  subscriptions page or click the button below
                </p>
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-2 p-8 '>
                <button className='px-20 py-2 bg-[#9C50E2] text-white rounded'>Download the app</button>
                <p className='text-[#333333] text-base font-normal'>
                    Having troubles ? visit help center
                </p>
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

export default SubscriptionCancel