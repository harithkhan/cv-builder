import "../../styles/Education.css";
import { useState } from "react";
import EditButton from "./Edit-button";
import ConfirmButton from "./Confirm-button";
import CancelButton from "./Cancel-button";

export default function Education() {
    const [isEditingEducationOne, setIsEditingEducationOne] = useState(false);
    const [isEditingEducationTwo, setIsEditingEducationTwo] = useState(false);

    // First default education state
    const [providerOne, setProviderOne] = useState("City University London");
    const [providerOneInputValue, setProviderOneInputValue] = useState(providerOne);
    
    const [locationOne, setLocationOne] = useState("United Kingdom");
    const [locationOneInputValue, setLocationOneInputValue] = useState(locationOne);

    const [courseOne, setCourseOne] = useState("Bar Professional Training Course (BPTC)");
    const [courseOneInputValue, setCourseOneInputValue] = useState(courseOne);

    const [startDateOne, setStartDateOne] = useState("September 2016");
    const [startDateOneInputValue, setStartDateOneInputValue] = useState(startDateOne);

    const [endDateOne, setEndDateOne] = useState("June 2017");
    const [endDateOneInputValue, setEndDateOneInputValue] = useState(endDateOne);

    const [resultOne, setResultOne] = useState("Very Competent");
    const [resultOneInputValue, setResultOneInputValue] = useState(resultOne);

    // Second default education state
    const [providerTwo, setProviderTwo] = useState("University of Reading");
    const [providerTwoInputValue, setProviderTwoInputValue] = useState(providerTwo);

    const [locationTwo, setLocationTwo] = useState("United Kingdom");
    const [locationTwoInputValue, setLocationTwoInputValue] = useState(locationTwo);

    const [courseTwo, setCourseTwo] = useState("Law LLB");
    const [courseTwoInputValue, setCourseTwoInputValue] = useState(courseTwo);

    const [startDateTwo, setStartDateTwo] = useState("September 2013");
    const [startDateTwoInputValue, setStartDateTwoInputValue] = useState(startDateTwo);

    const [endDateTwo, setEndDateTwo] = useState("June 2016");
    const [endDateTwoInputValue, setEndDateTwoInputValue] = useState(endDateTwo);

    const [resultTwo, setResultTwo] = useState("Second Class Upper (2:1)");
    const [resultTwoInputValue, setResultTwoInputValue] = useState(resultTwo);

    // First default functions
    function handleFirstEditClick() {
        setIsEditingEducationOne(true);
    }

    function handleEducationOneFormSubmit() {
        setProviderOne(providerOneInputValue);
        setLocationOne(locationOneInputValue);
        setCourseOne(courseOneInputValue);
        setStartDateOne(startDateOneInputValue);
        setEndDateOne(endDateOneInputValue);
        setResultOne(resultOneInputValue);
        setIsEditingEducationOne(false);
    }

    function handleEducationOneFormCancel() {
        setIsEditingEducationOne(false);
    }

    // Second default functions
    function handleSecondEditClick() {
        setIsEditingEducationTwo(true);
    }

    function handleEducatoinTwoFormSubmit() {
        setProviderTwo(providerTwoInputValue);
        setLocationTwo(locationTwoInputValue);
        setCourseTwo(courseTwoInputValue);
        setStartDateTwo(startDateTwoInputValue);
        setEndDateTwo(endDateTwoInputValue);
        setResultTwo(resultTwoInputValue);
        setIsEditingEducationTwo(false);
    }

    return (
        <div className="education-section">
            {isEditingEducationOne ?
            <form
                className="education-form-one"
                onSubmit={handleEducationOneFormSubmit}
            >
                <label className="education-input-container">
                    Education Provider:
                    <input
                        type="text"
                        className="education-input"
                        onChange={(event) => setProviderOneInputValue(event.target.value)}
                        value={providerOneInputValue}
                        autoFocus
                    />
                </label>
                <label className="education-input-container">
                    Location:
                    <input 
                        type="text"
                        className="education-input"
                        onChange={(event) => setLocationOneInputValue(event.target.value)}
                        value={locationOneInputValue}
                    />
                </label>
                <label className="education-input-container">
                    Course Name:
                    <input 
                        type="text"
                        className="education-input"
                        onChange={(event) => setCourseOneInputValue(event.target.value)}
                        value={courseOneInputValue}
                    />
                </label>
                <label className="education-input-container">
                    Start Date:
                    <input 
                        type="text"
                        className="education-input"
                        onChange={(event) => setStartDateOneInputValue(event.target.value)}
                        value={startDateOne}
                    />
                </label>
                <label className="education-input-container">
                    End Date:
                    <input 
                        type="text"
                        className="education-input"
                        onChange={(event) => setEndDateOneInputValue(event.target.value)}
                        value={endDateOneInputValue}
                    />
                </label>
                <label className="education-input-container">
                    Results (Grades):
                    <input 
                        type="text"
                        className="education-input"
                        onChange={(event) => setResultOneInputValue(event.target.value)}
                        value={resultOneInputValue}
                    />
                </label>
                <div className="education-button-container">
                    <ConfirmButton onClick={handleEducationOneFormSubmit}/>
                    <CancelButton onClick={handleEducationOneFormCancel}/>
                </div>
            </form> :
            <>
                <h2 className="education-header">Education</h2>
                <div className="education-container">
                    <div className="education-first-line-container">
                        <h3 className="education-provider">
                            {providerOne},
                            <span className="education-location"> {locationOne}</span>
                            <span className="education-course"> - {courseOne}</span>
                        </h3>
                        <EditButton onClick={handleFirstEditClick}/>
                    </div>
                    <p className="education-start-date">{startDateOne} - {endDateOne}</p>
                    <p className="education-result">{resultOne}</p>
                </div>
                <div className="education-container">
                    <div className="education-first-line-container">
                        <h3 className="education-provider">
                            {providerTwo}
                            <span className="education-location"> {locationTwo}</span>
                            <span className="education-course"> - {courseTwo}</span>
                        </h3>
                        <EditButton onClick={handleSecondEditClick}/>
                    </div>
                    <p className="education-start-date">{startDateTwo} - {endDateTwo}</p>
                    <p className="education-result">{resultTwo}</p>
                </div>
            </>}
        </div>
    )
}