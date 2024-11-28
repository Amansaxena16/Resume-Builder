import { Input } from "@/components/ui/input"
import { ResumeInfoContext } from "@/context/resumePreviewContext"
import { useContext } from "react"

function PersonalDetail(){
    const {previewText, setPreviewText} = useContext(ResumeInfoContext)

    function onchangePreviewText(e){
        const {name,value} = e.target // Get the name of the field and its value
        setPreviewText({
            ...previewText,[name]:value // updating the field dynamically
        })
    }
    return(
        <div>   
            <h1 className="text-xl font-semibold pt-2 ">Personal Detail</h1>
            <hr className="border-[1.5px] my-2" />

            <form action="">
                <div className="grid grid-cols-2 mt-5 gap-3">
                    {/* Name div */}
                    <div>
                        <label className="text-sm">Full Name</label>
                        <Input name="name" placeholder="Peter Parker" required onChange={onchangePreviewText}/>
                    </div>

                    {/* Job title div */}
                    <div>
                        <label className="text-sm">Job Title</label>
                        <Input name="jobTitle" placeholder="Full Stack Developer" required onChange={onchangePreviewText}/>
                    </div>

                    {/* phone div */}
                    <div>
                        <label className="text-sm">Contact</label>
                        <Input name="contact" placeholder="123-456-789" required onChange={onchangePreviewText}/>
                    </div>

                    {/* email div */}
                    <div>
                        <label className="text-sm">Email</label>
                        <Input name="email" placeholder="example@gmail.com" required onChange={onchangePreviewText}/>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default PersonalDetail