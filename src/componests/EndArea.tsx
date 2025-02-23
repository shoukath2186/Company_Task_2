// import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import ImageNave from '../assets/6860545013e0a63ba8cb7e94004971f7.png'

function EndArea() {
    return (
        <div className="w-full flex flex-wrap justify-center gap-4 text-white pt-[90px] pb-6 md:pb-10">

            <div className="sm:hidden flex w-full sm:w-[320px] h-[110px] border rounded-xl  flex-col items-center relative mx-4">
            <div className="w-[90px] h-[90px] overflow-hidden flex justify-center items-center absolute top-[-48px] bg-black rounded-full">
                    <img src={ImageNave} className="h-full w-full object-cover object-left" alt="Navigation Image" />
                </div>
                <h1 className="mt-10 text-[#0796EF] text-[30px]">DEEP <span className='text-white'>NET</span>  <span className='text-[#857878]'>SOFT</span></h1>
                <div className=" flex items-center justify-center gap-4">
                    <a href="#" className="text-gray-400 hover:text-[#0796EF] transition-colors duration-300">
                        <Facebook size={13} />
                    </a>

                    <a href="#" className="text-gray-400 hover:text-[#0796EF] transition-colors duration-300">
                        <Twitter size={13} />
                    </a>

                    <a href="#" className="text-gray-400 hover:text-[#0796EF] transition-colors duration-300">
                        <Youtube size={13} />
                    </a>

                    <a href="#" className="text-gray-400 hover:text-[#0796EF] transition-colors duration-300">
                        <Instagram size={13} />
                    </a>
                </div>
            </div>
            {/* CONNECT WITH US */}
            <div className="w-full sm:w-[320px] h-[110px] border rounded-xl flex flex-col justify-center items-center mx-4">
                <h1 className="text-[16px] text-center text-[#0796EF] mb-2">
                    CONNECT WITH US
                </h1>
                <p className="flex items-center gap-2 text-gray-400">
                    <Phone size={18} className="text-[#C19A06]" />
                    +91 9567843340
                </p>
                <p className="flex items-center gap-2 text-gray-400">
                    <Mail size={18} className="text-[#C19A06]" />
                    info@deepnetsoft.com
                </p>
            </div>

            {/* IMAGE CONTAINER */}
            <div className="hidden sm:flex w-full sm:w-[320px] h-[110px] border rounded-xl  flex-col items-center relative">
                <div className="w-[90px] h-[90px] overflow-hidden flex justify-center items-center absolute top-[-48px] bg-black rounded-full">
                    <img src={ImageNave} className="h-full w-full object-cover object-left" alt="Navigation Image" />
                </div>
                <h1 className="mt-10 text-[#0796EF] text-[30px]">DEEP <span className='text-white'>NET</span>  <span className='text-[#857878]'>SOFT</span></h1>
                <div className=" flex items-center justify-center gap-4">
                    <a href="#" className="text-gray-400 hover:text-[#0796EF] transition-colors duration-300">
                        <Facebook size={13} />
                    </a>

                    <a href="#" className="text-gray-400 hover:text-[#0796EF] transition-colors duration-300">
                        <Twitter size={13} />
                    </a>

                    <a href="#" className="text-gray-400 hover:text-[#0796EF] transition-colors duration-300">
                        <Youtube size={13} />
                    </a>

                    <a href="#" className="text-gray-400 hover:text-[#0796EF] transition-colors duration-300">
                        <Instagram size={13} />
                    </a>
                </div>

            </div>

            {/* EMPTY BOX (Placeholder for future content) */}
            <div className="w-full sm:w-[320px] h-[110px] border rounded-xl mx-4 flex flex-col items-center " >
                <h1 className='text-center text-[18px] mt-4 text-[#0796EF]'>FIND US</h1>
                <div>
                
                </div>
                <div className='w-[60%] flex pt-'>
                <MapPin className="text-[#C19A06]" size={30}  />
                <p className='text-[#857878] text-center text-[15px] '>First floor, Geo infopark, Infopark EXPY, Kakkanad</p>
                </div>
            </div>
        </div>

    )
}

export default EndArea