import React, { useState, useContext } from "react";

function ExperienceDetail() {
  const { previewText, setPreviewText } = useContext(ResumeInfoContext);

  const [experiences, setExperiences] = useState([
    { companyName: "", state: "", jobTitle: "", date: "", jobDescription: "" },
  ]);

  function onChangePreviewText(e, index) {
    const { name, value } = e.target;
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [name]: value,
    };
    setExperiences(updatedExperiences);

    // Optionally update previewText if needed
    setPreviewText({
      ...previewText,
      experiences: updatedExperiences,
    });
  }

  function addExperience() {
  setExperiences([
      ...experiences,
      { companyName: "", state: "", jobTitle: "", date: "", jobDescription: "" },
    ]);
  }

  return (
    <div>
      <h1 className="text-2xl font-light pt-4">Add your Job Experience</h1>
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold pt-2">Professional Experience</h1>
        <Button variant="secondary">
          <Brain />
          Generate from AI
        </Button>
      </div>
      <hr className="border-[1.5px] my-2" />

      {experiences.map((experience, index) => (
        <form key={index}>
          <div className="grid grid-cols-2 mt-5 gap-3">
            {/* Company Name */}
            <div>
              <label className="text-sm">Company Name</label>
              <Input
                name="companyName"
                placeholder="Amazon"
                value={experience.companyName}
                required
                onChange={(e) => onChangePreviewText(e, index)}
              />
            </div>

            {/* City/State */}
            <div>
              <label className="text-sm">City/State</label>
              <Input
                name="state"
                placeholder="New York, USA"
                value={experience.state}
                required
                onChange={(e) => onChangePreviewText(e, index)}
              />
            </div>

            {/* Job Title */}
            <div>
              <label className="text-sm">Job Title</label>
              <Input
                name="jobTitle"
                placeholder="Full Stack Developer"
                value={experience.jobTitle}
                required
                onChange={(e) => onChangePreviewText(e, index)}
              />
            </div>

            {/* Start-End Date */}
            <div>
              <label className="text-sm">Start - End Date</label>
              <Input
                name="date"
                placeholder="Jan 2020 - Dec 2020"
                value={experience.date}
                required
                onChange={(e) => onChangePreviewText(e, index)}
              />
            </div>

            {/* Job Description */}
            <div className="col-span-2">
              <label className="text-sm">Job Description</label>
              <Textarea
                name="jobDescription"
                placeholder="Summarize your Experience"
                value={experience.jobDescription}
                required
                onChange={(e) => onChangePreviewText(e, index)}
              />
            </div>
          </div>
        </form>
      ))}

      {/* Add Experience Button */}
      <div className="flex justify-end col-span-2 pt-2">
        <Button variant="secondary" onClick={addExperience}>
          ADD <PlusIcon />
        </Button>
      </div>
    </div>
  );
}

export default ExperienceDetail;
