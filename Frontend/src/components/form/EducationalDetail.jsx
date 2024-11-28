import { Input } from "@/components/ui/input"
import { ResumeInfoContext } from "@/context/resumePreviewContext"
import { useContext } from "react"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

function EducationalDetail(){
    const {previewText, setPreviewText} = useContext(ResumeInfoContext)
    function onChangePreviewText(e){
        const {name,value} = e.target
        setPreviewText({
            ...previewText, [name]:value
        })
    }
    return(
        <div>
            <h1 className="text-2xl font-light pt-4">Add your Educational Experience</h1>
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold pt-2">Education</h1>
            </div>
            <hr className="border-[1.5px] my-2" />

            <form action="">
                <div className="grid grid-cols-2 mt-5 gap-3">

                    {/* college name */}
                    <div>
                        <label className="text-sm">University Name</label>
                        <Input name="collegeName" placeholder="GL Bajaj" required onChange={onChangePreviewText}/>
                    </div>

                    {/* city name */}
                    <div>
                        <label className="text-sm">City/State</label>
                        <Input name="collegeState" placeholder="Greater Noida" required onChange={onChangePreviewText}/>
                    </div>

                    {/* Degree name */}
                    <div>
                        <label className="text-sm">Degree Name</label>
                        <Input name="degreeName" placeholder="Master of Computer Application" required onChange={onChangePreviewText}/>
                    </div>

                    {/* start end date */}
                    <div>
                        <label className="text-sm">Start - End Date</label>
                        <Input name="EducationDate" placeholder="Jan 2020 - Dec 202" required onChange={onChangePreviewText}/>
                    </div>

                    {/* Add button */}
                    <div className="flex justify-end col-span-2 pt-2">
                        <Button variant="secondary">ADD<PlusIcon></PlusIcon></Button>
                    </div>
                </div>
            </form>
        </div>  
    )
}

export default EducationalDetail