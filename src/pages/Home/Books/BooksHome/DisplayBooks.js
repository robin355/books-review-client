import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayBooks.css'
const DisplayBooks = ({ book }) => {
    const { name, price, image, describe, _id, author } = book;
    return (
        <div>
            <div className="card h-[500px] bg-red-100 shadow-xl">
                <figure className="px-10 pt-10 images">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-red-600 font-bold">{name}</h2>
                    <h3 className='text-secondary fond-bold'>Author Name: {author}</h3>
                    <p className='text-orange-600 font-semibold'>Price:{price}</p>
                    <p>{describe.slice(0, 100)}...</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-success"><Link to={`/books/${_id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayBooks;