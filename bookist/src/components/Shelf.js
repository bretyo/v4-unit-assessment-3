function Shelf(props){

    let books = props.books.map((element, index)=>{
        return <p key={index}>{element.title}</p>
    })
    return (
        <div className='shelf'>
            <h3>Your Shelf</h3>
            <button onClick={props.clear}>clear shelf</button>
            {books.length<=0 ? '-- shelf empty --' : books}
        </div>
    )
}

export default Shelf