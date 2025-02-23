// import React from 'react'

function Navbar() {
  return (
    <div className="md:h-[50px] bg-[#161616] text-[#857878] w-full">
      <div className="container mx-auto px-4 h-full">
        <div className="hidden  md:flex flex-col sm:flex-row justify-between items-center h-full text-sm">
          <p className="mb-2 sm:mb-0 ml-20">
            © 2024 Deepnetsoft Solutions. All rights reserved.
          </p>
          <div className="flex gap-4 mr-20">
            <p  className="hover:text-[#0796EF] transition-colors duration-300">
              Terms & Conditions
            </p>
            <p  className="hover:text-[#0796EF] transition-colors duration-300">
              Privacy Policy
            </p>
          </div>
        </div>
        <div className="flex md:hidden flex-col sm:flex-row w-full p-4 gap-4 text-[#857878]">
      <p className="text-center sm:text-left text-sm">
        © 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.
      </p>
      
      <div className="flex flex-wrap justify-center sm:justify-end text-sm">
        <button className=" mt-[-10px] transition-colors duration-300">
          Terms & Conditions
        </button>
        <button className=" mt-[-10px] transition-colors duration-300">
          Privacy Policy
        </button>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Navbar