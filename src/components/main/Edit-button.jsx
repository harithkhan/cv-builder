import { FaRegEdit as EditIcon } from "react-icons/fa";
import "../../styles/Edit-button.css";

export default function EditButton( {onClick}) {
    return (
        <button 
            className="edit-button"
            type="button"
        >
            <EditIcon
                className="edit-icon"
                aria-hidden="true"
                onClick={onClick}
            />
            <span className="sr-only">Edit</span>
        </button>
    )
}
