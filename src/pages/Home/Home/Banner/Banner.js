import React from 'react';
import cover from '../../../../Assets/Images/cover.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ background: `url(${cover})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello Books Lovers</h1>
                        <p className="mb-5">Bibliophilia or bibliophilism is the love of books. A bibliophile or bookworm is an individual who loves and frequently reads books.</p>
                        <button className="btn btn-outline btn-success text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;