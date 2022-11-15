import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAll from './DisplayAll';

const BooksAll = () => {
    const booksAll = useLoaderData()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                booksAll.map(books => <DisplayAll key={books._id} books={books}></DisplayAll>)
            }
        </div>
    );
};

export default BooksAll;