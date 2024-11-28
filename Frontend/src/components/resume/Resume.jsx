import { ResumeInfoContext } from "@/context/resumePreviewContext"
import FormSection from "../form/FormSection"
import ResumePreview from "../preview/ResumePreview"
import { useState } from "react"
import { UserButton } from "@clerk/clerk-react"
import Navbar from "../navbar/Navbar"

function Resume(){
    const [previewText, setPreviewText] = useState("")
    return(
        <>
           <div className="logo flex justify-between shadow-md py-3 px-4">
            <img src="/logo.svg" width={50} height={50} />
            <UserButton/>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-5">
                <ResumeInfoContext.Provider value={{previewText,setPreviewText}}>
                    <FormSection/>
                    <ResumePreview/>
                </ResumeInfoContext.Provider>
            </div>
        </> 
    )
}

export default Resume