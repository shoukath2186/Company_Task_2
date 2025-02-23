
import { useState } from 'react';
import ImageNave from '../assets/6860545013e0a63ba8cb7e94004971f7.png';
import { Menu, X } from 'lucide-react';

function NaveBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const Clickhandile = (id:number) => {
        console.log(id);
        setIsMenuOpen(false);
    }
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-[#121618]">
        <div className="w-full h-[50px] flex md:h-[100px] bg-[#121618]   justify-center">
            <div className="w-full sm:w-[90%]  h-full flex items-center justify-between md:pl-8 md:mt-[48px]">
                <div className=' flex  md:ml-8  '>

                    <div className="md:flex hidden w-[100px] md:h-[100px]  overflow-hidden  ">
                        <img src={ImageNave} className=" h-full w-full object-cover object-left" alt="Navigation Image" />
                    </div>

                    <div className="md:hidden absolute   w-full flex justify-center">
                        <div className="w-[70px] mt-[-10px] h-[70px] overflow-hidden">
                            <img src={ImageNave} className="w-full h-full object-cover object-left" alt="Navigation Image" />
                        </div>
                    </div>

                    <div className="  hidden md:flex ml-3  flex-col">
                        <h1 className="font-oswald font-normal mt-2 text-[30px] leading-[40px]  tracking-[3%] text-[#0796EF]">
                            DEEP <span className="text-white">NET</span>
                        </h1>
                        <h1 className="font-oswald font-normal text-[30px] leading-[40px]  tracking-[3%] text-[#857878]">
                            SOFT
                        </h1>
                    </div>
                </div>
                <div className='hidden md:flex h-full mr-8'>
                    <p className='text-white text-[18px] pl-[25px] pt-3 hover:text-[#0796EF] cursor-pointer' >HOME</p>
                    <p className='text-[#0796EF] text-[18px] pl-[25px] pt-3 hover:text-[#0796EF] cursor-pointer'>MENU</p>
                    <p className='text-white text-[18px] pl-[25px] pt-3 hover:text-[#0796EF] cursor-pointer'>MAKE A RESERVATION</p>
                    <p className='text-white text-[18px] pl-[25px] pt-3 hover:text-[#0796EF] cursor-pointer'>CONNECT US</p>

                </div>
                <button
                    onClick={toggleMenu}
                    className="md:hidden mr-4 text-white hover:cursor-pointer"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-[150px] left-0 right-0 bg-[#121618] md:hidden">
                        <div className="flex flex-col items-center py-4">
                            <p onClick={()=>Clickhandile(12)} className='text-white text-[18px] py-3 hover:text-[#0796EF] cursor-pointer'>HOME</p>
                            <p onClick={()=>Clickhandile(12)} className='text-white text-[18px] py-3 hover:text-[#0796EF] cursor-pointer'>MENU</p>
                            <p onClick={()=>Clickhandile(12)} className='text-white text-[18px] py-3 hover:text-[#0796EF] cursor-pointer'>MAKE A RESERVATION</p>
                            <p onClick={()=>Clickhandile(12)} className='text-white text-[18px] py-3 hover:text-[#0796EF] cursor-pointer'>CONNECT US</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    )
}

export default NaveBar