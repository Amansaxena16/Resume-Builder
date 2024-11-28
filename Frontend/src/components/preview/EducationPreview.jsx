import { ResumeInfoContext } from "@/context/resumePreviewContext"
import { useContext } from "react"

 function EducationPreview(){
    const {previewText} = useContext(ResumeInfoContext)
    return(
        <>
        {/* Heading */}
        <div>
            <h1 className="text-lg font-semibold pt-6 tracking-[1px]">EDUCATIONAL EXPERINCE</h1>   
            <hr className="border-[1.5px] my-2" />
        </div>

        {/* Experience div start from here */}  
        <div className="py-1">
            <div className="flex justify-between font-bold text-lg">
                <h1>{previewText.collegeName || "GL Bajaj"}</h1>
                <h1>{previewText.collegeState || "Greader Noida"}</h1>
            </div>
            <div className="flex justify-between text-sm">
                <h2>{previewText.degreeName || "Master of Computer Applications"}</h2>
                <h2>{previewText.EducationDate || "2023 - 2025"}</h2>
            </div>
        </div>
        {/* end here */}
        </>
    )
 }

 export default EducationPreview