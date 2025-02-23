import Image from "../assets/Selection.png";

interface SelectionProps {
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}

const Selection: React.FC<SelectionProps> = ({ select, setSelect }) => {
  console.log(select);

  return (
    <div className="bg-black w-full relative">
      {/* Background Image */}
      <div
        className="w-full h-[80px] bg-cover bg-repeat-x absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${Image}), url(${Image}), url(${Image})`,
          backgroundPosition: "0% center, 33% center, 66% center",
          backgroundSize: "auto 100%, auto 100%, auto 100%",
        }}
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="relative w-full h-[80px] flex items-center justify-center ">
        <button
          className={`text-white hover:cursor-pointer font-semibold text-[20px] py-[10px] w-[110px] m-2 border-2 border-[#0796EF] ${
            select === "food" ? "bg-[#0796EF]" : "bg-black"
          }`}
          onClick={() => setSelect("food")}
        >
          FOOD
        </button>

        <button
          className={`text-white hover:cursor-pointer font-semibold text-[20px] py-[10px] w-[110px] m-2 border-2 border-[#0796EF] ${
            select === "drinks" ? "bg-[#0796EF]" : "bg-black"
          }`}
          onClick={() => setSelect("drinks")}
        >
          DRINKS
        </button>

        <button
          className={`text-white hover:cursor-pointer font-semibold text-[20px] py-[10px] w-[110px] m-2 border-2 border-[#0796EF] ${
            select === "brunch" ? "bg-[#0796EF]" : "bg-black"
          }`}
          onClick={() => setSelect("brunch")}
        >
          BRUNCH
        </button>
      </div>
    </div>
  );
};

export default Selection;
