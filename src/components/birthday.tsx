import Image from "next/image"

const Birthday = () => {
    return (
        <div className="relative flex justify-center items-center gap-4 max-w-[744px] text-[#4F4F4F] min-h-[400px]">
            <Image
                src="/images/Birthday.svg"
                alt="New Year background"
                fill
                className="object-fill object-center z-0"
                quality={100}
            />
            <div className="flex flex-col gap-4 w-3/5 p-12 text-center items-center justify-between z-20">
                <div>
                    <div className="mb-6 text-[#D30101] font-extrabold text-[18px]"><p>Birthday Wishes!</p></div>
                    <div className="mb-6 font-normal text-base text-[#4F4F4F]">Happy Birthday [Recipient&apos;s Name]! In honor of your special day, a donation has been made to support [Project Name] at MKE. Your kindness is now touching lives and bringing hope to children in need. Wishing you a wonderful year filled with joy and purpose!</div>
                </div>
                <div>
                    Best of luck,<br />
                    Donald Franks
                </div>
            </div>
        </div>
    )
}

export default Birthday