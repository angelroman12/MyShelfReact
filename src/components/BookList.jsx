const BookList = ({books}) => {
    return ( 
        <div className="book-list">
            {books.map(book => 
                <div className="book-preview" key={book.id}>
                    <img src={book.picture} alt="" />
                    <h2> {book.title }</h2>
                    <h3> {book.author }</h3>
                    <h3> { book.price} Ron </h3>
                </div>
            )}
        </div>
     );
}
 
export default BookList;