import "./sidebar.css"

const FoodSidebar = ({onButtonClick}) => {
    return (
        <div className="sidebar">
            <button onClick={()=> onButtonClick("places to eat")}>Places to Eat</button>
            <button onClick={()=> onButtonClick("mess")}>Mess</button>
        </div>
    );
}

export default FoodSidebar;