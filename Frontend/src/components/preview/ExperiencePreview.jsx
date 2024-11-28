import { ResumeInfoContext } from "@/context/resumePreviewContext"
import { useContext } from "react"

function ExperiencePreview(){
    const {previewText} = useContext(ResumeInfoContext)
    return(
        <>
        {/* Heading */}
        <div>
            <h1 className="text-lg font-semibold pt-6 tracking-[1px]">PROFESSIONAL EXPERIENCE</h1>   
            <hr className="border-[1.5px] my-2" />
        </div>

        {/* Experience div start from here */}  
        <div>
            <div className="flex justify-between font-bold text-lg">
                <h1>{previewText.companyName || "Amazon"}</h1>
                <h1>{previewText.state || "New York, USA"}</h1>
            </div>
            <div className="flex justify-between text-sm">
                <h2>{previewText.ExpJobTitle || "Full Stack Developer"}</h2>
                <h2>{previewText.date || "Jan 2020 - Present"}</h2>
            </div>
            <p className="text-sm tracking-[1px] leading-5 pt-3">
                {previewText.jobDescription || "Worked as a Full Stack Developer at Amazon, building scalable web applications using React, Node.js, and AWS services. Led the design and implementation of end-to-end features, from frontend UI to backend API integration. Collaborated with cross-functional teams to optimize performance, security, and user experience. Contributed to deploying and maintaining applications in cloud environments, ensuring high availability and reliability."}
            </p>
        </div>
        {/* end here */}
        </>
    )
}

export default ExperiencePreview