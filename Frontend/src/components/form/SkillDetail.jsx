import { Input } from "@/components/ui/input"

function SkillDetail(){
    return(
        <div>
            <h1 className="text-2xl font-light pt-4">Add your Skills</h1>
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold pt-2">Skills</h1>
            </div>

            <hr className="border-[1.5px] my-2" />

            <div>
                <Input name="skills" placeholder="Python React JavaScript..." required/>
            </div>
        </div>
    )
}

export default SkillDetail