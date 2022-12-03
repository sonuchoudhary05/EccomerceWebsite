import ReactDOM  from "react-dom";
import { Fragment } from "react";
import { BackDrop } from "./Loader";
const Modal = ({onClose, children}) => {
    return (
        <>
        {
            ReactDOM.createPortal(
                <Fragment>
                    <BackDrop onClose = {onClose} />
                    <div className="modal"> 
                        <button type = "close" onClick = {onClose}>X</button>
                        <div className="content">{children}</div>
                    </div>
                </Fragment>
                ,
                document.getElementById("modal-root"))
        }
        </>
    )
}
export default Modal;