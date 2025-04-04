import Image from "next/image"

const Christmass = () => {
    return (
        <div className="relative flex justify-between gap-4 max-w-[744px] text-[#4F4F4F] min-h-[400px]">
            {/* SVG Background using Image component */}
            <Image
                src="/images/Christmas.svg"
                alt="New Year background"
                fill
                className="object-cover object-center z-0"
                quality={100}
            />
            <div className="flex flex-col gap-4 w-4/5 p-12 justify-between z-20">
                <div>
                    <div className="mb-4 font-normal text-[14px]">
                        <span>To Regina Daniels</span>
                    </div>
                    <div className="mb-6 font-extrabold text-[18px] text-[#D30101]">
                        <p>Christmas  Greetings!</p>
                    </div>
                    <div className="mb-6 font-normal text-base text-[#1C1C1C]">
                        <p>Merry Christmas [Recipient&apos;s Name]! Instead of a traditional gift, a donation has been made on your behalf to support [Project Name] at MKE. Your Christmas spirit now spreads warmth and care to children who need it most. Wishing you a season filled with love and generosity!</p>
                    </div>
                </div>
                <div className="">
                    Best of luck,<br />
                    Donald Franks
                </div>
            </div>
            <div className="w-1/5">
                {/* <Image src="/images/mothersday.svg" alt="mothersday" width={100} height={100} className="w-full h-auto" /> */}
            </div>
        </div>
    )
}

export default Christmass