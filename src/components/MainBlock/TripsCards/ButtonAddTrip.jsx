import {useState} from "react";
import {createPortal} from "react-dom";
import AddTripModal from "../AddTripModal/AddTripModal";

const ButtonAddTrip = () => {
    const [showModal, setShowModal] = useState(false)

    const handleAddTrip = () => {
        setShowModal(true)
    }

    return (
        <>
            <button onClick={handleAddTrip} type="button" className="add-trip-button">
                + <p>Add trip</p>
            </button>
            {showModal && createPortal(
                <AddTripModal onClose={() => setShowModal(false)}/>,
                document.body
            )}
        </>
    );
}

export default ButtonAddTrip;