import {useForm} from "react-hook-form";
import "./AddTripModal.css";

const AddTripModal = ({onClose}) => {
    const {
        register,
        handleSubmit,
        formState: {errors}
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

            <form onSubmit={handleSubmit(handeAddTripSubmit)} className="add-trip-form">
                <label className="add-trip-form-label">
                    <span><span style={{color: "red"}}>*</span>City</span>
                    <select
                        {...register("address", {required: true, pattern: /^(?!none$).*/})}
                        defaultValue="none"
                        className="add-trip-form-field"
                    >
                        <option value="none" disabled className="select-city-placeholder">Please select a city</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Tokyo">Tokyo</option>
                        <option value="London">London</option>
                    </select>
                    {errors.address && <span style={{color: "red"}}>This field is required</span>}
                </label>
                <label className="add-trip-form-label">
                    <span><span style={{color: "red"}}>*</span>Start date</span>
                    <input
                        type="text"
                        placeholder="Select date"
                        {...register("date1", {required: true})}
                        onFocus={(e) => e.target.type = "date"}
                        onBlur={(e) => e.target.type = "text"}
                        className="add-trip-form-field"
                    />
                    {errors.date1 && <span style={{color: "red"}}>This field is required</span>}
                </label>
                <label className="add-trip-form-label">
                    <span><span style={{color: "red"}}>*</span>End date</span>
                    <input
                        type="text"
                        placeholder="Select date"
                        {...register("date2", {required: true})}
                        onFocus={(e) => e.target.type = "date"}
                        onBlur={(e) => e.target.type = "text"}
                        className="add-trip-form-field"
                    />
                    {errors.date2 && <span style={{color: "red"}}>This field is required</span>}
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