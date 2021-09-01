import { useState, useEffect } from "react";
import BookList from "./BookList";

const Home = () => {
  const [books, setBooks] = useState(null)

  useEffect(() => {
    fetch('https://6086e5aea3b9c200173b7295.mockapi.io/products')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setBooks(data)
    })
  }, [])
  const  handleFilter = () => {
    const cheapBooks = books.filter(book => book.price < 30)
    setBooks(cheapBooks)
  }
    return (
      <div className="home">
        <button onClick={handleFilter}>Pret mai mic de 30 Ron </button>
        { books &&  < BookList books={books}/> }
      </div>
    );
}
   
  export default Home;
