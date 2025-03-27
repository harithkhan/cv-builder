import "../../styles/Confirm-button.css";
import { TiTick as TickIcon } from "react-icons/ti";

export default function ConfirmButton( {onClick} ) {
    return (
        <button
            type="button"
            className="confirm-button"
        >
            <TickIcon 
                className="confirm-icon"
                aria-hidden="true"
                onClick={onClick}
            />
            <span className="sr-only">Confirm</span>
        </button>
    )
}