import Image from "next/image";

const OTP = () => {
    return (
        <div className='bg-white w-[600px] p-8 text-[#333333] font-normal text-base'>
            <div className='w-full flex flex-col items-center justify-center gap-4'>
                <Image src="/Frame 3.svg" width={100} height={100} className='w-40 h-40' alt="Logo" />
            </div>
            <div className="flex flex-col gap-8">
                <div>
                    <p className="text-2xl font-semibold">Hi Oluya</p>
                    <p>Here is your One Time Password (OTP)
                        <br />
                        Please enter this code to verify your email for Delve
                    </p>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className="flex gap-3">
                        <div className="bg-[#F9F4FD] px-3 py-2 rounded">1</div>
                        <div className="bg-[#F9F4FD] px-3 py-2 rounded">2</div>
                        <div className="bg-[#F9F4FD] px-3 py-2 rounded">3</div>
                        <div className="bg-[#F9F4FD] px-3 py-2 rounded">4</div>
                    </div>
                </div>
                <div>
                    <p>OTP will expire in <span className="font-bold "> 5 minutes</span></p>
                </div>
                <div>
                    Best Regards, <br />
                    <span className="text-[#8324DB] font-semibold">Delve team</span>
                </div>
            </div>
            <div className='flex flex-col gap-10 items-center justify-center text-center text-[#5D1A9B] mt-8'>
                <Image src="/Framehorizontal.svg" width={100} height={100} className='w-36 h-auto' alt="Divider" />
                <div>
                    <div className='flex gap-6'>
                        <a href="">FAQ</a>
                        <a href="">CONTACT US</a>
                        <a href="">DOWNLOAD</a>
                    </div>
                </div>
                <div className='flex gap-8'>
                    <a href="http://">
                        <Image src="/facebook.svg" alt="Facebook" width={100} height={100} className='w-12 h-12' />
                    </a>
                    <a href="http://">
                        <Image src="/instagram.svg" alt="Instagram" width={100} height={100} className='w-12 h-12' />
                    </a>
                    <a href="http://">
                        <Image src="/x.svg" alt="X" width={100} height={100} className='w-12 h-12' />
                    </a>
                    <a href="http://">
                        <Image src="/tiktok.svg" alt="TikTok" width={100} height={100} className='w-12 h-12' />
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

export default OTP;