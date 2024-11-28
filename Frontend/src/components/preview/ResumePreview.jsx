import EducationPreview from "./EducationPreview"
import ExperiencePreview from "./ExperiencePreview"
import PersonalDetailPreview from "./PersonalDetailPreview"
import ProjectPreview from "./ProjectPreview"
import SkillPreview from "./SkillPreview"
import SummeryPreview from "./SummeryPreview"

function ResumePreview(){
    return(
        <div className="shadow-lg  h-full p-14 border-t-[20px] max-h-screen overflow-y-auto">
            {/* personal detail preview */}
            <PersonalDetailPreview/>

            {/* summery preview */}
            <SummeryPreview/>

            {/* professional experiene preview */}
            <ExperiencePreview/>

            {/* Project preview */}
            <ProjectPreview/>

            {/* education preview */}
            <EducationPreview/>

            {/* skills preview */}
            <SkillPreview/>
        </div>
    )
}
export default ResumePreview