import Image from "next/image"

const NewYear = () => {
  return (
    <div className="relative flex justify-between gap-4 max-w-[744px] text-white min-h-[400px]">
    {/* SVG Background using Image component */}
    <Image
      src="/images/newyear.svg"
      alt="New Year background"
      fill
      className="object-cover object-center z-0"
      quality={100}
    />
              <div className="flex flex-col gap-4 w-3/5 p-12 justify-between z-20">
                  <div>
                      <div className="mb-4 font-normal text-[14px]">
                          <span>To Regina Daniels</span>
                      </div>
                      <div className="mb-6 font-extrabold text-[18px]">
                          <p>Happy New Year!</p>
                      </div>
                      <div className="mb-6 font-normal text-base text-[#F9F9F9]">
                          <p>Happy New Year, [Recipient&apos;s Name]! To kick off the year with meaning, a donation has been made in your honor to support [Project Name] at MKE. Your new year starts by making a difference and giving hope to those who need it most.</p>
                      </div>
                  </div>
                  <div className="text-[#F9F9F9]">
                  Best of luck,<br />
                  Donald Franks
                  </div>
              </div>
              <div className="w-3/5">
                  <Image src="/images/mothersday.svg" alt="mothersday" width={100} height={100} className="w-full h-auto"/>
              </div>
          </div>
  )
}

export default NewYear