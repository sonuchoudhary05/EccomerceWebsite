import ReactDOM  from "react-dom";
export const BackDrop = ({onClose}) => {
    const handleClick = () => {
        if(onClose){
            onClose();
        }
    }
    return (
        <div onClick = {handleClick} className="loader-overlay"></div> 
    )
}
const Loader = () => {
    return (
       ReactDOM.createPortal(
        <>
            <BackDrop />
            <div className="loading-dots">
                <div>Loading</div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>
        </>,
        document.getElementById("loader-root")
       )
    )
}
export default Loader;