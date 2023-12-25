import "./CustomEvents.css";

const CustomEvents = () => {
    return (
        <div className="custom-wrapper">
            <div className="custom-desc"> Add Custom Event</div>
            <div className="label-container">
                <div className="label-desc">Label:</div>
                <div className="label-color"></div>
                <div className="label-color"></div>
                <div className="label-color"></div>
                <div className="label-color custom"></div>
            </div>
            <div className="title-container">
                <label for="title" className="title-desc">Title:</label>
                <input type="text" id="title" name="title" />
            </div>
            <div className="datetime-container">
                <label for="datetime" className="datetime-desc">Date & Time:</label>
                <input type="time" id="datetime" name="datetime" />
            </div>
        </div>
    )
}

export default CustomEvents