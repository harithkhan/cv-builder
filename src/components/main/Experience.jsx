import "../../styles/Experience.css";
import EditButton from "./Edit-button";
import { useState } from "react";
import ConfirmButton from "./Confirm-button";
import CancelButton from "./Cancel-button";
import Bullet from "./Bullet";

export default function Experience() {
    const [isEditingExperience, setIsEditingExperience] = useState(false);
    const [isEditingExperienceTwo, setIsEditingExperienceTwo] = useState(false);

    // Experience One State
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

    //Experience Two State
    const [organizationTwo, setOrganizationTwo] = useState("Chong and Partners");
    const [organizationTwoInputValue, setOrganizationTwoInputValue] = useState(organizationTwo);

    const [locationTwo, setLocationTwo] = useState("Kuala Lumpur");
    const [locationTwoInputValue, setLocationTwoInputValue] = useState(locationTwo);

    const [designationTwo, setDesignationTwo] = useState("Pupil-in-chambers");
    const [designationTwoInputValue, setDesignationTwoInputValue] = useState(designationTwo);

    const [startDateTwo, setStartDateTwo] = useState("November 2017");
    const [startDateTwoInputValue, setStartDateTwoInputValue] = useState(startDateTwo);

    const [endDateTwo, setEndDateTwo] = useState("September 2018");
    const [endDateTwoInputValue, setEndDateTwoInputValue] = useState(endDateTwo);

    const [bulletOneTwo, setBulletOneTwo] = useState("Advised and facilitated the successful acquisition of the college (legal and financial due diligence) into family business.");
    const [bulletOneTwoInputValue, setBulletOneTwoInputValue] = useState(bulletOneTwo);

    const [bulletTwoTwo, setBulletTwoTwo] = useState("Increased student body to 400 +/- through management of marketing and recruitment teams.");
    const [bulletTwoTwoInputValue, setBulletTwoTwoInputValue] = useState(bulletTwoTwo);


    // Experience One Functions
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

    // Experience Two Functions
    function handleEditExperienceTwoClick() {
        setIsEditingExperienceTwo(true);
    }

    function handleExperienceTwoFormSubmit(event) {
        event.preventDefault();
        setOrganizationTwo(organizationTwoInputValue);
        setLocationTwo(locationTwoInputValue);
        setDesignationTwo(designationTwoInputValue);
        setStartDateTwo(startDateTwoInputValue);
        setEndDateTwo(endDateTwoInputValue);
        setBulletOneTwo(bulletOneTwoInputValue);
        setBulletTwoTwo(bulletTwoTwoInputValue);
        setIsEditingExperienceTwo(false);
    }

    function handleExperienceTwoCancelClick() {
        setIsEditingExperienceTwo(false);
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
            </form> : isEditingExperienceTwo ?
            <form 
                className="experience-form"
                onSubmit={handleExperienceTwoFormSubmit}
            >
                <h3 className="experience-form-header">Experience Info</h3>
                <label className="organization-input-container experience-input-container">
                    Organization:
                    <input 
                        onChange={(event) => setOrganizationTwoInputValue(event.target.value)}
                        type="text"
                        className="organization-input experience-input"
                        value={organizationTwoInputValue}
                        autoFocus
                    />
                </label>
                <label className="location-input-container experience-input-container">
                    Location:
                    <input 
                        onChange={(event) => setLocationTwoInputValue(event.target.value)}
                        type="text"
                        className="location-input experience-input"
                        value={locationTwoInputValue}
                    />
                </label>
                <label className="designation-input-container experience-input-container">
                    Designation:
                    <input 
                        onChange={(event) => setDesignationTwoInputValue(event.target.value)}
                        type="text"
                        className="designation-input experience-input"
                        value={designationTwoInputValue}
                    />
                </label>
                <label className="start-date-input-container experience-input-container">
                    Start Date:
                    <input 
                        onChange={(event) => setStartDateTwoInputValue(event.target.value)}
                        type="text"
                        className="start-date-input experience-input"
                        value={startDateTwoInputValue}
                    />
                </label>
                <label className="end-date-input-container experience-input-container">
                    End Date:
                    <input 
                        onChange={(event) => setEndDateTwoInputValue(event.target.value)}
                        type="text"
                        className="end-date-input experience-input"
                        value={endDateTwoInputValue}
                    />
                </label>
                <div className="experience-button-container">
                    <ConfirmButton onClick={handleExperienceTwoFormSubmit}/>
                    <CancelButton onClick={handleExperienceTwoCancelClick}/>
                </div>
                <h3 className="experience-form-header">Bullets</h3>
                <ul className="bullet-input-section">
                    <li className="bullet-input-container">
                        <textarea 
                            onChange={(event) => setBulletOneTwoInputValue(event.target.value)}
                            type="textarea"
                            className="bullet-input"
                            value={bulletOneTwoInputValue}
                        />
                    </li>
                    <li className="bullet-input-container">
                        <textarea 
                            onChange={(event) => setBulletTwoTwoInputValue(event.target.value)}
                            type="textarea"
                            className="bullet-input"
                            value={bulletTwoTwoInputValue}
                        />
                    </li>
                </ul>
                <div className="experience-button-container">
                    <ConfirmButton onClick={handleExperienceTwoFormSubmit}/>
                    <CancelButton onClick={handleExperienceTwoCancelClick}/>
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
                <div className="experience-container">
                    <div className="experience-title-container">
                        <h3 className="experience-organization">{organizationTwo},
                            <span className="experience-location"> {locationTwo}</span>
                            <span className="experience-designation"> - {designationTwo}</span>
                        </h3>
                        <EditButton onClick={handleEditExperienceTwoClick} />
                    </div>
                    <p className="start-date">{startDateTwo}<span className="end-date"> - {endDateTwo}</span></p>
                    <ul className="experience-bullets-container">
                        <Bullet 
                            text={bulletOneTwo}
                        />
                        <Bullet 
                            text={bulletTwoTwo}
                        />
                    </ul>
                </div>
            </>}
            <hr className="experience-break" />
        </div>
    )
}