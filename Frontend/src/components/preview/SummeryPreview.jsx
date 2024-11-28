import { ResumeInfoContext } from "@/context/resumePreviewContext"
import { useContext } from "react"

function SummeryPreview(){

    const {previewText} = useContext(ResumeInfoContext)
    return(
        <p className="text-sm tracking-[1px] leading-5">{previewText.summary || "Skilled front-end developer with expertise in building responsive, user-friendly web interfaces using modern technologies like React, HTML, CSS, and JavaScript. Experienced in translating design wireframes into functional code while ensuring cross-browser compatibility. Strong focus on performance optimization, accessibility, and delivering seamless user experiences. Familiar with tools like Tailwind CSS and version control systems like Git."}</p>
    )
}

export default SummeryPreview 