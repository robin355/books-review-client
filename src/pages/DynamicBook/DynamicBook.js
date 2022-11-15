import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DynamicBook = () => {
    const book = useLoaderData()
    const { name, image, price, author, describe } = book;
    return (
        <div>
            <div className="card h-[700px] bg-red-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-[400px]" />
                </figure>
                <div className="card-body">
                    <h2 className="text-red-600 font-bold">{name}</h2>
                    <h3 className='text-secondary fond-bold'>Author Name: {author}</h3>
                    <p className='text-orange-600 font-semibold'>Price:{price}</p>
                    <p>{describe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicBook;