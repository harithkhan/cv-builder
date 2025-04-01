import "../../styles/Experience.css";
import EditButton from "./Edit-button";
import { useState } from "react";

export default function Experience() {
    const [isEditingExperience, setIsEditingExperience] = useState(false);

    const [organization, setOrganization] = useState("IHG College");
    const [organizationInputValue, setOrganizationInputValue] = useState(organization);

    const [location, setLocation] = useState("Kuala Lumpur");
    const [locationInputValue, setLocationInputValue] = useState(location);

    const [designation, setDesignation] = useState(" - Director");
    const [designationInputValue, setDesignationInputValue] = useState(designation);

    const [startDate, setStartDate] = useState("September 2018");
    const [startDateInputValue, setStartDateInputValue] = useState(startDate);

    const [endDate, setEndDate] = useState(" - Present");
    const [endDateInputValue, setEndDateInputValue] = useState(endDate);

    function handleEditExperienceClick() {
        setIsEditingExperience(true);
    }

    function handleExperienceFormSubmit(event) {
        event.preventDefault();
        setOrganization(organizationInputValue);
        setLocation(locationInputValue);
        setDesignation(designationInputValue);
        setStartDate(startDateInputValue);
        setEndDate(endDateInputValue);
    }

    return (
        <div className="experience-section">
            {isEditingExperience ? 
            <form 
                className="experience-form"
                onSubmit={handleExperienceFormSubmit}
            >
                <label className="organization-input-container experience-input-container">
                    Organization:
                    <input 
                        onChange={(event) => setOrganizationInputValue(event.target.value)}
                        type="text"
                        className="organization-input experience-input"
                        value={organizationInputValue}
                        autoFocus
                    />
                </label>
                <label className="location-input-container experience-input-container">
                    Location:
                    <input 
                        onChange={(event) => setLocationInputValue(event.target.value)}
                        type="text"
                        className="location-input experience-input"
                        value={locationInputValue}
                    />
                </label>
                <label className="designation-input-container experience-input-container">
                    Designation:
                    <input 
                        onChange={(event) => setDesignationInputValue(event.target.value)}
                        type="text"
                        className="designation-input experience-input"
                        value={designationInputValue}
                    />
                </label>
                <label className="start-date-input-container experience-input-container">
                    Start Date:
                    <input 
                        onChange={(event) => setStartDateInputValue(event.target.value)}
                        type="text"
                        className="start-date-input experience-input"
                        value={startDateInputValue}
                    />
                </label>
                <label className="end-date-input-container experience-input-container">
                    End Date:
                    <input 
                        onChange={(event) => setEndDateInputValue(event.target.value)}
                        type="text"
                        className="end-date-input experience-input"
                        value={endDateInputValue}
                    />
                </label>
            </form> :
            <>
                <h2 className="experience-header">Experience</h2>
                <div className="experience-container">
                    <div className="experience-title-container">
                        <h3 className="experience-organization">IHG College,
                            <span className="experience-location"> Kuala Lumpur</span>
                            <span className="experience-designation"> - Director</span>
                        </h3>
                        <EditButton onClick={handleEditExperienceClick} />
                    </div>
                    <p className="start-date">September 2018<span className="end-date"> - Present</span></p>
                    <ul className="experience-bullets-container">
                        <li className="experience-bullets">Advised and facilitated the successful acquisition of the college (legal and financial due diligence) into family business.</li>
                        <li className="experience-bullets">Increased student body to 400 +/- through management of marketing and recruitment teams.</li>
                    </ul>
                </div>
            </>}
        </div>
    )
}