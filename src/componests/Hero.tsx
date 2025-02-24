import Image from "../assets/main.png";
import LeftImage from '../assets/left.png';
import RightImage from '../assets/rigt.png';
import {MenuItem as responsMenuItem} from '../componests/adminComponents/MenuHandling'
import { useEffect } from "react";
import {TakeAllItems} from "../API_handling/apis";

interface HeroProps {
  menuItems: responsMenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<responsMenuItem[]>>;
  select: string;
}

const Hero: React.FC<HeroProps> = ({ menuItems,setMenuItems,select }) => {


  useEffect(()=>{
    const fetchData = async () => {
        try {
            const res:responsMenuItem[] = await TakeAllItems();
            // console.log(res);
            setMenuItems(res)
            
        } catch (error) {
            console.error(error);
        }
    };
    fetchData();
  },[])

  const getItemType = (select:string) => {
    if (select === "food") return "FOOD ITEM";
    if (select === "drinks") return "DRINK ITEM";
    return "BRUNCH COCKTAILS";
};

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative w-full px-[10px] md:px-[200px] py-[30px] md:py-[100px]">
        <div className="w-full border border-[#ffff] p-4 flex flex-col justify-center items-center bg-opacity-10 backdrop-blur-lg ">
         <img className="absolute top-[-20px] md:top-[-128px] left-[-10px] md:left-[-40px] w-[100px] md:w-[170px] " src={LeftImage} alt="" />
          {/* Title Section */}
          <div className="w-full flex justify-center items-center">
            <div className="w-6 md:w-[70px] h-1 border-2 border-gray-400 bg-gray-400"></div>
            <h1 className="text-white text-[37px] mx-5 my-[20px] font-semibold text-center">
            {getItemType(select)}
            </h1>
            <div className="w-6 md:w-[70px] h-1 border-2 border-gray-400 bg-gray-400"></div>
          </div>

          {/* Content Section */}
          <div className="w-full flex flex-wrap  ">
            {menuItems ? menuItems.map((item: any, i: number) => (
              <div key={item._id} className={` w-full lg:w-1/2 p-4 group hover:bg-black/5 transition-all duration-300 rounded-lg  ${i%2==0?'md:pl-10':'md:pr-10' }`}>
                <div className="relative flex items-center w-full">
                  <h2 className="text-white text-xl md:text-2xl font-semibold">{item.name.toUpperCase()}</h2>
                  <div className="mx-4  flex-grow mt-4  border-b-2 border-dotted border-white/100"></div>
                  <span className="text-white text-xl md:text-2xl font-bold">${item.price}</span>
                </div>
                <p className="text-white/80 mt-2 text-sm md:text-base leading-relaxed font-['Kelly_Slab']">
                  {item.description}
                </p>
              </div>
            )) : (<div className="text-white flex items-center justify-center w-full">No Item Find</div>)}



          </div>
          
          <img className="absolute bottom-[-40px] right-[-2px] w-[100px] md:w-[200px] " src={RightImage} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Hero;
