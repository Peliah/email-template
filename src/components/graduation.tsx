import Image from "next/image"

const Graduation = () => {
    return (
        <div className="relative flex justify-center items-center gap-4 max-w-[744px] text-[#4F4F4F] min-h-[400px]">
            {/* SVG Background using Image component */}
            <Image
                src="/images/Graduation.svg"
                alt="New Year background"
                fill
                className="object-cover object-center z-0"
                quality={100}
            />
            <div className="flex flex-col gap-4 w-3/5 p-12 text-center items-center justify-between z-20">
                <div>
                    <div className="mb-4 text-[#4F4F4F] font-normal text-[14px]"><p>To: Regina Daniels</p></div>
                    <div className="mb-6 text-[#D30101] font-extrabold text-[18px]"><p>CONGRATULATIONS!</p></div>
                    <div className="mb-6 font-normal text-base text-[#4F4F4F]">Congratulations on your graduation, [Recipient&apos;s Name]! To celebrate your hard work and success, a donation has been made in your name to support [Project Name] at MKE. Your achievement is now part of a bigger story — helping children build brighter futures too.</div>
                </div>
                <div>
                    Best of luck,<br />
                    Donald Franks
                </div>
            </div>
        </div>
    )
}

export default Graduation