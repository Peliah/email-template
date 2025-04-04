import Image from "next/image"

const ChildrensDay = () => {
  return (
       <div className="flex justify-between gap-4 max-w-[744px] bg-white text-[#1C1C1C]">
           <div className="flex flex-col gap-4 w-3/5 p-12 justify-between">
               <div>
                   <div className="mb-4 text-[#4F4F4F] font-normal text-[14px]">
                       <span>To Regina Daniels</span>
                   </div>
                   <div className="mb-6 font-extrabold text-[18px]">
                       <p>IT’S  YOUR  DAY!</p>
                   </div>
                   <div className="mb-6 font-normal text-base text-[#4F4F4F]">
                       <p>Happy Children’s Day, [Recipient's Name]! Today, in your honor, a donation has been made to support [Project Name] at MKE. Your kindness is helping ensure that every child gets the chance to dream, learn, and play.</p>
                   </div>
               </div>
               <div>
               Best of luck,<br />
               Donald Franks
               </div>
           </div>
           <div className="w-3/5">
               <Image src="/images/childrensday.svg" alt="childrensday" width={100} height={100} className="w-full h-auto"/>
           </div>
       </div>
  )
}

export default ChildrensDay