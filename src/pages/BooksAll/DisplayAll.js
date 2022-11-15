import React from 'react';

const DisplayAll = ({ books }) => {
    const { name, author, price, describe, image } = books
    return (
        <div>
            <div className="card card-compact h-[700px] bg-red-100  shadow-xl">
                <figure >
                    <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="text-red-600 font-bold">{name}</h2>
                    <h3 className='text-secondary fond-bold'>Author Name: {author}</h3>
                    <p className='text-orange-600 font-semibold'>Price:{price}</p>
                    <p>{describe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-success">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayAll;