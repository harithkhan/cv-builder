import "../../styles/Experience.css";
import EditButton from "./Edit-button";
import { useState } from "react";
import ConfirmButton from "./Confirm-button";
import CancelButton from "./Cancel-button";
import Bullet from "./Bullet";

export default function Experience() {
    const [isEditingExperience, setIsEditingExperience] = useState(false);

    const [organization, setOrganization] = useState("IHG College");
    const [organizationInputValue, setOrganizationInputValue] = useState(organization);

    const [location, setLocation] = useState("Kuala Lumpur");
    const [locationInputValue, setLocationInputValue] = useState(location);

    const [designation, setDesignation] = useState("Director");
    const [designationInputValue, setDesignationInputValue] = useState(designation);

    const [startDate, setStartDate] = useState("September 2018");
    const [startDateInputValue, setStartDateInputValue] = useState(startDate);

    const [endDate, setEndDate] = useState("Present");
    const [endDateInputValue, setEndDateInputValue] = useState(endDate);

    const [bulletOne, setBulletOne] = useState("Advised and facilitated the successful acquisition of the college (legal and financial due diligence) into family business.");
    const [bulletOneInputValue, setBulletOneInputValue] = useState(bulletOne);

    const [bulletTwo, setBulletTwo] = useState("Increased student body to 400 +/- through management of marketing and recruitment teams.");
    const [bulletTwoInputValue, setBulletTwoInputValue] = useState(bulletTwo);

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
        setBulletOne(bulletOneInputValue);
        setBulletTwo(bulletTwoInputValue);
        setIsEditingExperience(false);
    }

    function handleExperienceCancelClick() {
        setIsEditingExperience(false);
    }

    return (
        <div className="experience-section">
            {isEditingExperience ? 
            <form 
                className="experience-form"
                onSubmit={handleExperienceFormSubmit}
            >
                <h3 className="experience-form-header">Experience Info</h3>
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
                <div className="experience-button-container">
                    <ConfirmButton onClick={handleExperienceFormSubmit}/>
                    <CancelButton onClick={handleExperienceCancelClick}/>
                </div>
                <h3 className="experience-form-header">Bullets</h3>
                <ul className="bullet-input-section">
                    <li className="bullet-input-container">
                        <textarea 
                            onChange={(event) => setBulletOneInputValue(event.target.value)}
                            type="textarea"
                            className="bullet-input"
                            value={bulletOneInputValue}
                        />
                    </li>
                    <li className="bullet-input-container">
                        <textarea 
                            onChange={(event) => setBulletTwoInputValue(event.target.value)}
                            type="textarea"
                            className="bullet-input"
                            value={bulletTwoInputValue}
                        />
                    </li>
                </ul>
                <div className="experience-button-container">
                    <ConfirmButton onClick={handleExperienceFormSubmit}/>
                    <CancelButton onClick={handleExperienceCancelClick}/>
                </div>
            </form> :
            <>
                <h2 className="experience-header">Experience</h2>
                <div className="experience-container">
                    <div className="experience-title-container">
                        <h3 className="experience-organization">{organization},
                            <span className="experience-location"> {location}</span>
                            <span className="experience-designation"> - {designation}</span>
                        </h3>
                        <EditButton onClick={handleEditExperienceClick} />
                    </div>
                    <p className="start-date">{startDate}<span className="end-date"> - {endDate}</span></p>
                    <ul className="experience-bullets-container">
                        <Bullet 
                            text={bulletOne}
                        />
                        <Bullet 
                            text={bulletTwo}
                        />
                    </ul>
                </div>
            </>}
            <hr className="experience-break" />
        </div>
    )
}