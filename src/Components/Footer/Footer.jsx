

const Footer = () => {
    return (
        <div>
            <div className='mt-28 mb-8'>
                <h2 className='text-center text-[#0B0B0B] text-4xl font-bold mb-3'>Gadget Heaven</h2>
                <p className='text-[#09080F99] text-lg font-medium text-center'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className='border lg:w-9/12 mx-auto' />

            <div className='flex flex-col md:flex-row lg:flex-row justify-center gap-x-40 gap-y-5 md:gap-y-0 lg:gap-y-0 mt-9 mb-14'>
                <div>
                    <h3 className='mb-4 text-[#0B0B0B]  text-center font-bold text-lg'>Services</h3>
                    <p className='text-[#09080F99] mb-3 text-center  text-base font-semibold'>Product Support</p>
                    <p className='text-[#09080F99] mb-3 text-center  text-base font-semibold'>Order Tracking</p>
                    <p className='text-[#09080F99] mb-3 text-center  text-base font-semibold'>Shipping & Delivery Returns</p>
                </div>
                <div>
                    <h3 className='mb-4 text-[#0B0B0B] text-center font-bold text-lg'>Company</h3>
                    <p className='text-[#09080F99] mb-3 text-center text-base font-semibold'>About Us</p>
                    <p className='text-[#09080F99] mb-3 text-center text-base font-semibold'>Careers</p>
                    <p className='text-[#09080F99] mb-3 text-center text-base font-semibold'>Contact</p>
                </div>
                <div>
                    <h3 className=' text-[#0B0B0B] text-center font-bold text-lg'>Legal</h3>
                    <p className='text-[#09080F99] mb-3 text-center text-base font-semibold'>Terms of Service</p>
                    <p className='text-[#09080F99] mb-3 text-center text-base font-semibold'>Privacy Policy</p>
                    <p className='text-[#09080F99] mb-3 text-center text-base font-semibold'>Cookie Policy</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;