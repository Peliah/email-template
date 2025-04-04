import Image from "next/image"

const Anniversary1 = () => {
  return (
    <div className="flex justify-between gap-4 max-w-[744px] bg-white text-[#1C1C1C]">
        <div className="flex flex-col gap-4 w-3/5 p-12 justify-between">
            <div>
                <div className="mb-4 text-[#4F4F4F] font-normal text-[14px]">
                    <span>To Regina Daniels</span>
                </div>
                <div className="mb-6 font-extrabold text-[18px]">
                    <p>Happy Anniversary</p>
                </div>
                <div className="mb-6 font-normal text-base text-[#4F4F4F]">
                    <p>Celebrating your love and journey, [Recipient&apos;s Name]! In honor of your anniversary, a donation has been made on your behalf to support [Project Name] at MKE. Your enduring bond now inspires hope and positive change for children who need it most.</p>
                </div>
            </div>
            <div>
            Best of luck,<br />
            Donald Franks
            </div>
        </div>
        <div className="w-3/5">
            <Image src="/images/anniversary1.svg" alt="anniversary1" width={100} height={100} className="w-full h-auto"/>
        </div>
    </div>
  )
}

export default Anniversary1