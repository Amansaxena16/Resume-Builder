import { ResumeInfoContext } from "@/context/resumePreviewContext"
import { Dot } from "lucide-react"
import { useContext } from "react"

function ProjectPreview(){
    const {previewText} = useContext(ResumeInfoContext)
    return(
        <div>
            <div className="text-lg font-semibold pt-6 tracking-[1px]">
            <h1>PROJECTS</h1>
            <hr className="border-[1.5px] my-2" />
        </div>

        {/* project preview div start from here */}
        <div>
            <div className="flex justify-between font-bold text-lg">
                <h1>{previewText.projectName || "AI Resume Build"}</h1>
                <h1>{previewText.techStack || "React  - Rest"}</h1>
            </div>
            <p className="text-sm tracking-[1px] leading-5 pt-3">
                {previewText.projectDescription || "Developed an AI-powered resume builder that generates professional resumes quickly using machine learning algorithms. The tool offers customizable templates, auto-suggests content based on user inputs, and provides formatting options for PDF and Word downloads. Integrated with React for a seamless UI and Django REST for backend processing. Focused on enhancing user experience with real-time previews and efficient data handling"}
            </p>
        </div>
        {/* end here */}
        </div>
    )
}

export default ProjectPreview