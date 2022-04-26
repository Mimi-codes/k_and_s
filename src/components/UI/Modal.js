import ReactDOM from 'react-dom';



const Backdrop = (props) => {
return (
    <div className={'classes.backdrop'}></div>
)
}


const ModalOverlay = (props) => {
    return (
        <>
        <div className={'classes.modal'}></div>
        <div className={'classes.content'}>{props.children}</div>
    </>
    )
}

const Modal = props => {
return (
    <>
    {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlay'))}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
 </>
)
}

export default Modal; //rendered in Cart.js