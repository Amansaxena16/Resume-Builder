import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/resumePreviewContext";
import { useContext } from "react";
import { PlusIcon, Brain } from "lucide-react";
import { AIchatSession } from "../../../AIModel";

const prompt = "Write a professional experience summary of a {ExpJobTitle} in {companyName} company in 4-5 lines.";

function ExperienceDetail() {
    const { previewText, setPreviewText } = useContext(ResumeInfoContext);

    function onChangePreviewText(e) {
        const { name, value } = e.target;
        setPreviewText({
            ...previewText,
            [name]: value, // Update the context dynamically based on the input field name
        });
    }

    const GenrateSummeryFromAI = async () => {
        const { jobTitle, companyName } = previewText;

        // Check if jobTitle and companyName are provided
        if (!jobTitle || !companyName) {
            console.warn("Both Job Title and Company Name are required to generate a summary.");
            return;
        }

        // Replace placeholders in the prompt
        const PROMPT = prompt
            .replace("{ExpJobTitle}", ExpJobTitle)
            .replace("{companyName}", companyName);

        try {
            const result = await AIchatSession.sendMessage(PROMPT);
            const aiResponse = await result.response.text(); // Fetch the AI response text
    
            // Set the AI response into the `jobDescription` field
            setPreviewText({
                ...previewText,
                jobDescription: aiResponse, // Update the `jobDescription` field
            });
        } catch (error) {
            console.error("Error generating summary from AI:", error);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-light pt-4">Add your Job Experience</h1>
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold pt-2">Professional Experience</h1>
                {/* Disable button if jobTitle or companyName is empty */}
                <Button
                    variant="secondary"
                    onClick={GenrateSummeryFromAI}
                    disabled={!previewText.jobTitle || !previewText.companyName}
                >
                    <Brain />
                    Generate from AI
                </Button>
            </div>
            <hr className="border-[1.5px] my-2" />

            <form action="">
                <div className="grid grid-cols-2 mt-5 gap-3">
                    {/* Company Name */}
                    <div>
                        <label className="text-sm">Company Name</label>
                        <Input
                            name="companyName"
                            placeholder="Amazon"
                            required
                            onChange={onChangePreviewText}
                        />
                    </div>

                    {/* City/State */}
                    <div>
                        <label className="text-sm">City/State</label>
                        <Input
                            name="state"
                            placeholder="New York, USA"
                            required
                            onChange={onChangePreviewText}
                        />
                    </div>

                    {/* Job Title */}
                    <div>
                        <label className="text-sm">Job Title</label>
                        <Input
                            name="ExpJobTitle"
                            placeholder="Full Stack Developer"
                            required
                            onChange={onChangePreviewText}
                        />
                    </div>

                    {/* Start-End Date */}
                    <div>
                        <label className="text-sm">Start - End Date</label>
                        <Input
                            name="date"
                            placeholder="Jan 2020 - Dec 2020"
                            required
                            onChange={onChangePreviewText}
                        />
                    </div>

                    {/* Job Description */}
                    <div className="col-span-2">
                        <label className="text-sm">Job Description</label>
                        <Textarea
                            placeholder="Summarize your experience"
                            name="jobDescription"
                            required
                            value={previewText.jobDescription || ""}
                            onChange={onChangePreviewText}
                        />
                    </div>

                    {/* Add Button */}
                    <div className="flex justify-end col-span-2 pt-2">
                        <Button variant="secondary">
                            ADD
                            <PlusIcon />
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ExperienceDetail;
