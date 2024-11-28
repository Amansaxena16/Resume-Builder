import EducationalDetail from "./EducationalDetail"
import ExperienceDetail from "./ExperienceDetail"
import PersonalDetail from "./PersonalDetail"
import ProjectDetail from "./ProjectDetail"
import SkillDetail from "./SkillDetail"
import SummeryDetail from "./SummeryDetail"
import { Button } from "@/components/ui/button"

function FormSection(){
    return(
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 max-h-screen overflow-y-auto">
            <div>
                <h1 className="text-2xl font-light ">Get Started with the basic information</h1>
            </div>

           {/* personal detail */}
            <PersonalDetail/>

           {/* summery info */}
           <SummeryDetail/>

           {/* professional experience */}
           <ExperienceDetail/>

           {/* projects */}
           <ProjectDetail/>

           {/* education */}
           <EducationalDetail/>

           {/* skills */}
           <SkillDetail/>

           <div className=" py-8 text-center">
            <Button variant="destructive" className="px-[13rem] py-[1.5rem]">Create Resume</Button>
           </div>
        </div>
    )
}

export default FormSection