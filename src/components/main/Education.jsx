import "../../styles/Education.css";
import { useState } from "react";

export default function Education() {
    const [isEditingEducation, setIsEditingEducation] = useState(false);

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

    return (
        <div className="education-section">
            {isEditingEducation ?
            <p>Placeholder</p> :
            <>
                <h2 className="education-header">Education</h2>
                <div className="education-container-one">
                    <h3 className="education-provider">
                        {providerOne},
                        <span className="education-location"> {locationOne}</span>
                        <span className="education-course"> - {courseOne}</span>
                    </h3>
                    <p className="education-start-date">{startDateOne} - {endDateOne}</p>
                    <p className="education-result">{resultOne}</p>
                </div>
            </>}
        </div>
    )
}