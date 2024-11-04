import bannerImg from '/assets/banner.jpg'

const Banner = () => {
    return (
        <div className='lg:w-9/12 mx-auto    mb-28'>
            
                <div className='bg-[#9538E2] rounded-2xl md:rounded-b-[32px] lg:rounded-b-[32px]  h-[560px] md:h-[670px] lg:h-[700px] border-2 backdrop-blur-2xl px-2'>
                    <div className='mb-7 mx-w-[1000px]  md:mx-w-[1000px] lg:w-[1020px] mx-auto pt-24'>
                        <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    </div>
                    <div className='mb-8 lg:w-[790px] mx-auto'>
                        <p className='text-center text-white text-lg font-medium'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                    <div className='flex justify-center items-center '>
                        <button className='px-7 py-4 hover:bg-slate-100 text-xl font-bold text-[#9538E2] bg-white rounded-full'>Shop Now</button>
                    </div>
                </div>
                {/* imageDiv */}
                <div className='flex justify-center items-center -mt-28 md:-mt-64 lg:-mt-64 '>
                    <img className=' w-[300px] md:w-[700px] lg:w-3/4 lg:h-[600px] object-cover rounded-[32px] p-3 backdrop-blur-md border' src={bannerImg} alt="" />
                </div>

           
        </div>
    );
};

export default Banner;