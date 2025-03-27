import { MdOutlineCancel as CancelIcon } from "react-icons/md";
import "../../styles/Cancel-button.css";

export default function CancelButton( {onClick} ) {
    return (
        <button
            type="button"
            className="cancel-button"
        >
            <CancelIcon 
                className="cancel-icon"
                aria-hidden="true"
                onClick={onClick}
            />
            <span className="sr-only">Cancel</span>
        </button>
    )
}