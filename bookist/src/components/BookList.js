

function BookList(props){

    let books = props.data.map((element, index)=>{
        let str = `${element.title} by ${element.author}`
        return <div className='book' key={index} onClick={()=>props.addToShelf(element.title)}>
            <img src={element.img}/>
            <br/>
            <span>{str}</span>
        </div>
    })
    return(
        <div className='list'>
            {books}
        </div>
    )
}

export default BookList;