import ReactDOM from "react-dom"

import "./Error.css"

const BackDrop = () => {
    return (
        <div className="backdrop"></div>
    )
} 

const Error = () => {
    return(
        <>
       {
        ReactDOM.createPortal(
            <BackDrop/>, document.getElementById('backdrop-root') 
                )
       } 
        </>
    )
} 

export default Error