import Image from "next/image"

const MothersDay = () => {
  return (
<div className="flex justify-between gap-4 max-w-[744px] bg-white text-[#1C1C1C]">
              <div className="flex flex-col gap-4 w-3/5 p-12 justify-between">
                  <div>
                      <div className="mb-4 text-[#4F4F4F] font-normal text-[14px]">
                          <span>To Regina Daniels</span>
                      </div>
                      <div className="mb-6 font-extrabold text-[18px]">
                          <p>Congratulations! You Did It!</p>
                      </div>
                      <div className="mb-6 font-normal text-base text-[#4F4F4F]">
                          <p>Congratulations on your special milestone, [Recipient's Name]! To mark this important moment, a donation has been made in your honor to support [Project Name] at MKE. Your achievement is creating a lasting impact and bringing hope to children who need it most."</p>
                      </div>
                  </div>
                  <div>
                  Best of luck,<br />
                  Donald Franks
                  </div>
              </div>
              <div className="w-3/5">
                  <Image src="/images/milestone.svg" alt="milestone" width={100} height={100} className="w-full h-auto"/>
              </div>
          </div>
  )
}

export default MothersDay