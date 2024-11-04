import React from 'react';

const Products = () => {
    return (
        <div className='container md:container lg:container mx-auto pb-28 px-2'>
            <h2 className='text-center text-[#0B0B0B] font-bold text-4xl mb-12'>Explore Cutting-Edge Gadgets</h2>
            {/* Products Section */}
            <section className='flex flex-col md:flex-col lg:flex-row justify-center  gap-6 mx-auto'>

                {/* catagory btn div */}
                <div className=' lg:w-1/5 '>
                    <div className='bg-white border rounded-2xl grid grid-cols-2 lg:grid-cols-1 gap-3  px-6 py-6'>
                        <button className='font-extrabold text-center  text-lg text-[#09080F99] rounded-full px-3 py-4 bg-[#09080F0D] '>All Product</button>
                        <button className='font-extrabold text-center  text-lg text-[#09080F99] rounded-full px-3 py-4 bg-[#09080F0D] '>Laptops</button>
                        <button className='font-extrabold text-center  text-lg text-[#09080F99] rounded-full px-3 py-4 bg-[#09080F0D] '>Phones</button>
                        <button className='font-extrabold text-center  text-lg text-[#09080F99] rounded-full px-3 py-4 bg-[#09080F0D] '>Smart Watches</button>
                        <button className='font-extrabold text-center  text-lg text-[#09080F99] rounded-full px-3 py-4 bg-[#09080F0D] '>Accessories</button>
                    </div>
                </div>

                {/* Card Div */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5 mx-auto'>
                    <div className="card bg-base-100  shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;