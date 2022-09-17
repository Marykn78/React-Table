import './Button.style.css'
const Button =({type="submit"})=>{
    return(
        <div>
            <input type={type} className='button' />
        </div>
    )
}

export default Button