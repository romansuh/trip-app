import {useForm} from "react-hook-form";
import "./AddTripModal.css";

const AddTripModal = ({onClose}) => {
    const {
        register,
        handleSubmit
    } = useForm();

    const handeAddTripSubmit = (data) => {
        console.log(data)

        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-header">
                <h4>Create trip</h4>
                <span onClick={onClose} tabIndex="1" className="modal-header-cross">❌</span>
            </div>

            <hr/>

            <form onSubmit={handleSubmit(handeAddTripSubmit)} className="add-trip-form">
                <label className="add-trip-form-label">
                    City
                    <select
                        {...register("address", {required: true})}
                        defaultValue=""
                        className="add-trip-form-field"
                    >
                        <option value="" disabled>Please select a city</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Tokyo">Tokyo</option>
                        <option value="London">London</option>
                    </select>
                </label>
                <label className="add-trip-form-label">
                    Start date
                    <input
                        type="date"
                        {...register("date1", {required: true})}
                        className="add-trip-form-field"
                    />
                </label>
                <label className="add-trip-form-label">
                    End date
                    <input
                        type="date"
                        {...register("date2", {required: true})}
                        className="add-trip-form-field"
                    />
                </label>

                <hr/>
                <div className="add-trip-btns-wrapper">
                    <button onClick={onClose} className="btn-modal btn-close-modal">Cancel</button>
                    <button type="submit" className="btn-modal btn-save-modal">Save</button>
                </div>
            </form>
        </div>
    );
}

export default AddTripModal;