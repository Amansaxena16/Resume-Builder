import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { ResumeInfoContext } from "@/context/resumePreviewContext"
import { Brain } from "lucide-react"
import { AIchatSession } from "../../../AIModel"
import PersonalDetail from "./PersonalDetail"

const prompt = "Job Title : {JobTitle}, in 4-5 line."
// const prompt = "what is toys!!"

function SummeryDetail(){
    const {previewText, setPreviewText} = useContext(ResumeInfoContext)

    function onChangePreviewText(e){
        const {name,value} = e.target
        setPreviewText({
            ...previewText, [name]:value
        })
    }

    const GenrateSummeryFromAI = async() => {   
        const PROMPT = prompt.replace('{JobTitle}',ResumeInfoContext.jobTitle)
        const result = await AIchatSession.sendMessage(PROMPT)
        console.log(PROMPT)
        console.log(result.response.text()) 
    }

    return(
        <div>
            <h1 className="text-2xl font-light pt-4">Add Summery for your Job Title</h1>
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold pt-2">Summery</h1>
                <Button variant="secondary" onClick = {() => GenrateSummeryFromAI()}><Brain/>Generate from AI</Button>
            </div>
            <hr className="border-[1.5px] my-2" />

            <form action="">
                <div className="grid grid-cols-1 mt-5 gap-3">
                    <Textarea placeholder="Summeries, your job title..." name="summery" onChange={onChangePreviewText}/>
                </div>
            </form>
        </div>
    )
}

export default SummeryDetail