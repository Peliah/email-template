import Image from "next/image";

const ForgotPassword = () => {
    return (
        <div className='bg-white w-[600px] p-8 text-[#333333] font-normal text-base'>
            <div className='w-full flex flex-col items-center justify-center gap-4'>
                <Image src="/Frame 3.svg" width={100} height={100} className='w-40 h-40' alt="Logo" />
            </div>
            <div>
                <div className="border border-[#D9BBF4] bg-[#F3E9FB] w-full flex flex-col items-center justify-center px-4 py-10 gap-8 rounded-3xl">
                    <Image src="/lock.svg" width={100} height={100} className='w-20 h-20' alt="Lock icon" />
                    <h1 className="text-2xl font-semibold text-center">Forgot Password</h1>

                    <div className="w-full">
                        <p>Hello Ayeesha</p>
                        <p>
                            Someone (hopefully you) has requested to change your password. <br />
                            Please click the link below to change your password now.
                        </p>
                        <br />
                        <br />
                        <div className="w-full text-left flex flex-col items-center justify-center">
                            <button className='px-20 py-2 bg-[#9C50E2] text-white rounded'>Reset Password</button>
                        </div>

                        <br />
                        <br />
                        <p>
                            If you didn&apos;t make this request, please disregard this email.
                            <br />
                            <br />
                            Please note that your password will not change unless you click the link above and create a new one. This link will expire in one day. If your link has expired, you can always request another.
                            <br />
                            <br />
                            If you&apos;ve requested multiple reset emails, please make sure you click the link inside the most recent email.
                        </p>
                        <br />
                        <p className="font-semibold">Sincerely,<br />The Delve Team</p>
                    </div>
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

export default ForgotPassword;