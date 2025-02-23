// import React from 'react'
import MenuImage from "../assets/menu.jpeg"

function Menu() {
    return (
        <>

            <div className="w-full mt:mt-[50px] md:mt-[100px] overflow-hidden ">
                <div
                    className="w-[1700px] h-[340px] md:h-[300px] ml-[-100px] bg-cover bg-top bg-no-repeat opacity-30"
                    style={{ backgroundImage: `url(${MenuImage})` }}
                >
                </div>
                <div className="absolute top-[50px] md:top-[100px] left-0  right-0 w-full h-[340px] md:h-[300px] flex items-center justify-center">
                    <div className="w-[700px]">
                        <h1 className="text-[75px] text-white text-center font-oswald  font-semibold">MENU</h1>
                        <p className="text-center text-[#BBBBBB] text-[18px]">Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Menu