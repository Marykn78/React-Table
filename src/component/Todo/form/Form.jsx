import { Children } from "react"


const Form =({children,onsubmit})=>{
    return(
        <form onSubmit={onsubmit}>
            {children}
        </form>
    )
}

export default Form