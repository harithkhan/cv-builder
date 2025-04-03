import "../../styles/Education.css";
import { useState } from "react";
import EditButton from "./Edit-button";

export default function Education() {
    const [isEditingEducation, setIsEditingEducation] = useState(false);

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
        setIsEditingEducation(true);
    }

    // Second default functions
    function handleSecondEditClick() {
        setIsEditingEducation(true);
    }

    return (
        <div className="education-section">
            {isEditingEducation ?

            <p>Placeholder</p> :
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