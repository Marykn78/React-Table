import { Children } from "react"
import './Form.style.css'
// import './Input.style.css'

const Form =({children,onsubmit})=>{
    return(
        <form onSubmit={onsubmit} className="form_style">
            {children}
        </form>
    )
}

export default Form