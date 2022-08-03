import { Fragment } from 'react';
import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom';

function BackDrop(props){
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

function ModelOverlay(props){
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById("overlays");
function Modal(props){
    return <Fragment>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />,portalElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
    </Fragment>
}
export default Modal;