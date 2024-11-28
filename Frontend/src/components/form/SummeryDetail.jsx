import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useContext, useState } from "react"
import { ResumeInfoContext } from "@/context/resumePreviewContext"
import { Brain } from "lucide-react"
import { AIchatSession } from "../../../AIModel"

const prompt = "Job Title : {JobTitle}, in 4-5 line."


function SummeryDetail(){
    const {previewText, setPreviewText} = useContext(ResumeInfoContext)
    const {summary, setSummary} = useState("")
    const title = previewText.jobTitle

    function onChangePreviewText(e) {
        const { name, value } = e.target
        setPreviewText(prevState => ({ ...prevState, [name]: value })) // Update previewText correctly
    }

    const GenrateSummeryFromAI = async() => {   

        if(!title){
            console.log('To Generate the Summary, Enter the Jon Title!!')
        }
        // Replace placeholders in the prompt
        const PROMPT = prompt
        .replace("{JobTitle}", title)
        try {
            const result = await AIchatSession.sendMessage(PROMPT);
            const aiResponse = await result.response.text(); // Fetch the AI response text
    
            // Set the AI response into the `projectDescription` field
            setSummary(aiResponse)

        console.log(aiResponse)
        } catch (error) {
            console.error("Error generating summary from AI:", error);
        }
    }

    return(
        <div>
            <h1 className="text-2xl font-light pt-4">Add Summary for your Job Title</h1>
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold pt-2">Summary</h1>
                <Button variant="secondary"
                disabled={!title}
                onClick = {() => GenrateSummeryFromAI()}><Brain/>Generate from AI</Button>
            </div>
            <hr className="border-[1.5px] my-2" />

            <form action="">
                <div className="grid grid-cols-1 mt-5 gap-3">
                    <Textarea placeholder="Summeries, your job title..." name="summary" value={summary} onChange={onChangePreviewText}/>
                </div>
            </form>
        </div>
    )
}

export default SummeryDetail