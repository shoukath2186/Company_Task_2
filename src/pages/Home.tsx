import React from 'react'
import NaveBar from "../componests/NaveBar"
import Menu from "../componests/Menu"
import Selection from "../componests/Selection"
import Hero from '../componests/Hero'
import EndArea from '../componests/EndArea'
import Navbar from '../componests/Navbar'

function Home() {
  const [select,setSelect]=React.useState<string>('food');


  const menuItems:any = [
    
      {
        id: 1,
        name: "Cheese Burger",
        description: "Juicy beef patty with melted cheese, lettuce, and tomato.",
        price: 5.99,
        type: "food",
      },
      {
        id: 2,
        name: "Margherita Pizza",
        description: "Classic Italian pizza with fresh tomatoes, basil, and mozzarella.",
        price: 8.99,
        type: "drinks",
      },
      {
        id: 3,
        name: "Grilled Chicken Salad",
        description: "Healthy grilled chicken with fresh greens and vinaigrette.",
        price: 7.49,
        type: "drinks",
      },
      {
        id: 4,
        name: "Mango Smoothie",
        description: "Refreshing mango smoothie blended with yogurt and honey.",
        price: 4.99,
        type: "food",
      },
      {
        id: 5,
        name: "Iced Coffee",
        description: "Chilled coffee with a smooth and rich flavor.",
        price: 3.49,
        type: "brunch",
      },
      {
        id: 6,
        name: "Lemonade",
        description: "Freshly squeezed lemonade with a hint of mint.",
        price: 2.99,
        type: "food",
      },
      {
        id: 7,
        name: "Lemonade",
        description: "Freshly squeezed lemonade with a hint of mint.",
        price: 2.99,
        type: "food",
      },
    ]


  return (
    <div className="min-h-screen bg-black w-full  ">
       <NaveBar />
       <Menu/>
       <Selection select={select} setSelect ={setSelect}/>
       <Hero  menuItems={menuItems}/>
       <EndArea/>
       <Navbar/>
       

    </div>
  )
}

export default Home