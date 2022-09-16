
const ToDo =({id,title,description,onclickupdate,onclickdelete}) =>{
    return(
        <div>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onclickdelete}>delete</button>
            <button onClick={onclickupdate}>update</button>
        </div>
    )
}

export default ToDo 