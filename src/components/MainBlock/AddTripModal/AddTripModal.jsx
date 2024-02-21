import {useForm} from "react-hook-form";
import "./AddTripModal.css";
import {tripsData} from "../../../common/data/tripsData";
import {useDispatch} from "react-redux";
import {addTrip} from "../../../store/tripsSlice";

const isWithin15Days = (dateToCheck, fromDate) => {
    const timeDifference = dateToCheck.getTime() - fromDate.getTime();

    const daysDifference = timeDifference / (1000 * 3600 * 24);

    return Math.abs(daysDifference) <= 15;
}

const AddTripModal = ({onClose}) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: {errors},
        getValues,
    } = useForm();

    const handeAddTripSubmit = (data) => {
        dispatch(addTrip(data))

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
                        defaultValue=""
                        className="add-trip-form-field"
                    >
                        <option value="" disabled >Please select a city</option>
                        {tripsData.map((tripOption, index) => {
                            return <option key={index} value={tripOption.address}>{tripOption.address}</option>
                        })}
                    </select>
                    {errors.address && <span style={{color: "red"}}>This field is required</span>}
                </label>
                <label className="add-trip-form-label">
                    <span><span style={{color: "red"}}>*</span>Start date</span>
                    <input
                        type="text"
                        placeholder="Select date"
                        {...register("date1", {
                            required: true,
                            validate: {
                                isWithin15DaysFromNow: value => isWithin15Days(new Date(value), new Date()),
                            }
                        })}
                        onFocus={(e) => e.target.type = "date"}
                        onBlur={(e) => e.target.type = "text"}
                        className="add-trip-form-field"
                    />
                    {errors.date1 && <span style={{color: "red"}}>This field is required, date must be within 15 days</span>}
                </label>
                <label className="add-trip-form-label">
                    <span><span style={{color: "red"}}>*</span>End date</span>
                    <input
                        type="text"
                        placeholder="Select date"
                        {...register("date2", {
                            required: true,
                            validate: {
                                moreThanStartDate: value => new Date(value) > new Date(getValues("date1")),
                                isWithin15DaysFromStart: value => isWithin15Days(new Date(value), new Date(getValues("date1"))),
                            }
                        })}
                        onFocus={(e) => e.target.type = "date"}
                        onBlur={(e) => e.target.type = "text"}
                        className="add-trip-form-field"
                    />
                    {errors.date2 && <span style={{color: "red"}}>This field is required, date must be within 15 days from start date</span>}
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