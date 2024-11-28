import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ResumeInfoContext } from "@/context/resumePreviewContext"
import { useContext } from "react"
import { PlusIcon } from "lucide-react"
import { Brain } from "lucide-react"
import { AIchatSession } from "../../../AIModel";

const prompt = "write a small summery of 4-5 line on {projectName} project and its tech stack is {techStack}"

function ProjectDetail(){

    const {previewText, setPreviewText} = useContext(ResumeInfoContext)

    function onChangePreviewText(e){
        const {name,value} = e.target
        setPreviewText({
            ...previewText, [name]:value
        })
    }

    const GenrateSummeryFromAI = async () => {
        const { projectName, techStack } = previewText;

        // Check if jobTitle and companyName are provided
        if (!projectName || !techStack) {
            console.warn("Both Project Name and Tech Stack are required to generate a summary.");
            return;
        }

        // Replace placeholders in the prompt
        const PROMPT = prompt
            .replace("{projectName}", projectName)
            .replace("{techStack}", techStack);

        try {
            const result = await AIchatSession.sendMessage(PROMPT);
            const aiResponse = await result.response.text(); // Fetch the AI response text
    
            // Set the AI response into the `projectDescription` field
            setPreviewText({
                ...previewText,
                projectDescription: aiResponse, // Update the `projectDescription` field

            });
        console.log(result)
        } catch (error) {
            console.error("Error generating summary from AI:", error);
        }
    };

    return(
        <div>
            <h1 className="text-2xl font-light pt-4">Add your Projects</h1>
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold pt-2">Projects</h1>
                <Button
                    variant="secondary"
                    onClick={GenrateSummeryFromAI}
                    disabled={!previewText.projectName || !previewText.techStack}
                >
                    <Brain />
                    Generate from AI
                </Button>            </div>
            <hr className="border-[1.5px] my-2" />

            <form action="">
                <div className="grid grid-cols-2 mt-5 gap-3">

                    {/* project name */}
                    <div>
                        <label className="text-sm">Project Name</label>
                        <Input name="projectName" placeholder="AI Resume Builder" required onChange={onChangePreviewText}/>
                    </div>

                    {/* Tech Stack for your project */}
                    <div>
                        <label className="text-sm">Tech Stack</label>
                        <Input name="techStack" placeholder="React" required onChange={onChangePreviewText}/>
                    </div>

                    {/* project Detail */}
                    <div className="col-span-2">
                    <label className="text-sm">Project Description</label>
                        <Textarea placeholder="Summeries, your Project" name="projectDescription"
                         value={previewText.projectDescription || ""} 
                         onChange={onChangePreviewText}/>
                    </div>

                     {/* Add button */}
                     <div className="flex justify-end col-span-2 pt-2">
                        <Button variant="secondary">ADD<PlusIcon/></Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProjectDetail