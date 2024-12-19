import BannerImg from '../../assets/banner.jpg'

const Banner = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 1200, 
            behavior: "smooth", 
        });
    };
    return (
        <div className=' mb-28'>
            <div className="lg:w-11/12 mx-auto p-2 backdrop-blur-3xl border-2  rounded-2xl">
                <div className="bg-[#9538E2] rounded-2xl   h-[560px] md:h-[50px] lg:h-[700px]     ">

                    <div className='mb-8 mx-w-[1000px]  md:mx-w-[1000px] lg:w-[1200px] mx-auto pt-24'>
                        <h1 className='text-center text-3xl md:text-4xl lg:text-6xl font-bold text-white'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    </div>

                    <div className='mb-8 lg:w-[790px] mx-auto'>
                        <p className='text-center text-white md:text-base lg:text-lg font-medium'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>

                    <div className='flex justify-center items-center '>
                        {/* <button className="btn btn-outline  text-[#9538E2] border-2 bg-white border-[#9538E2] rounded-full px-6  text-lg font-semibold " >Shop Now</button> */}
                        <button onClick={handleScroll} className="btn btn-lg   text-[#9538E2] border-2 bg-white border-[#9538E2] rounded-full px-7  text-xl font-semibold hover:text-white hover:bg-gray-800 border-none">Shop Now</button>
                    </div>

                </div>
            </div>

            {/* Image Div */}
            <div className='flex justify-center items-center -mt-28 md:-mt-64 lg:-mt-64 '>
                <img className=' w-[300px] md:w-[500px] lg:w-[1300px] lg:h-[650px] object-cover rounded-[32px] p-3 md:p-3 lg:p-5 backdrop-blur-md border' src={BannerImg} alt="" />
            </div>

        </div>

    );
};

export default Banner;