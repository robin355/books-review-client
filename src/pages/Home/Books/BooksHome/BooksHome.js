import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayBooks from './DisplayBooks';
const BooksHome = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
                {
                    books.map(book => <DisplayBooks key={book._id} book={book}></DisplayBooks>)
                }
            </div>
            <button className="btn btn-outline btn-success text-white mb-5"><Link to='/booksAll'>See All</Link></button>
        </div>
    );
};

export default BooksHome;