import './ToDo.style.css'
const ToDo =({id,title,description,onclickupdate,onclickdelete}) =>{
    return(
        <div className="form_style">
            <h3 className='item_addform id'>{id}</h3>
            <h3 className='item_addform title'>{title}</h3>
            <h3 className='item_addform des'>{description}</h3>
            <button onClick={onclickdelete} className="button">delete</button>
            <button onClick={onclickupdate} className="button">update</button>
        </div>
    )
}

export default ToDo 