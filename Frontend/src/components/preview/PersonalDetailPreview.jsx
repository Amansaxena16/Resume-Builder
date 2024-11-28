import { ResumeInfoContext } from "@/context/resumePreviewContext";
import { useContext } from "react";

function PersonalDetailPreview() {
  const {previewText} = useContext(ResumeInfoContext)
  return (
    <>
      {/* user Name and user post preview */}
      <div>
        <h1 className="text-[2.3rem] font-bold tracking-[1px] text-center">
        {previewText.name || "Peter Parker"}
        </h1>
        <h2 className="text-center font-normal text-lg">{previewText.jobTitle || "Full Stack Developer"}</h2>
      </div>

      {/* user contact and user email preview */}
      <div className="flex justify-between py-2 ">
        <h2 className="text-sm font-normal">{previewText.contact || "123-456-789"}</h2>
        <h2 className="text-sm font-normal">{previewText.email || "example@gmail.com"}</h2>
      </div>

      {/* border */}
      <hr className="border-[1.5px] my-2" />
    </>
  );
}

export default PersonalDetailPreview;
