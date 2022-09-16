
const Input =({lable,value,onchange,type="text",name})=>{
    return(
        <lable>
            <span>{lable}</span>
            <input 
            type={type}
            name={name} 
            value={value} 
            onChange={onchange}/>
        </lable>
        // <lable>description</lable>
        // <input type="text" name='description' value={formdata.description} onChange={handleupdate}></input>
        // <input type={"submit"}></input>
    )
}
export default Input