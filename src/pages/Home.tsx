import React from 'react'
import NaveBar from "../componests/NaveBar"
import Menu from "../componests/Menu"
import Selection from "../componests/Selection"
import Hero from '../componests/Hero'
import EndArea from '../componests/EndArea'
import Navbar from '../componests/Navbar'
import {MenuItem as responsMenuItem} from '../componests/adminComponents/MenuHandling'


function Home() {
  const [select,setSelect]=React.useState<string>('food');
  const [menuItems,setMenuItems]=React.useState<responsMenuItem[]>([]);
  const [filteredItems, setFilteredItems] = React.useState<responsMenuItem[]>([]);

  
  React.useEffect(() => {
    if (select === "food" || select === "drinks") {
      setFilteredItems(menuItems.filter((item) => item.type === select));
    } else {
      setFilteredItems(menuItems); // Show all items if selection is not food or drinks
    }
  }, [select, menuItems]);

  return (
    <div className="min-h-screen bg-black w-full  ">
       <NaveBar />
       <Menu/>
       <Selection select={select} setSelect ={setSelect}/>
       <Hero  menuItems={filteredItems} setMenuItems={setMenuItems} select={select}/>
       <EndArea/>
       <Navbar/>
       

    </div>
  )
}

export default Home