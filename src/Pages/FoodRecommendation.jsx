import { FoodData } from "../data";
import { Link } from "react-router-dom";
const FoodRecommendation = () => {
  return (
    <div className="flex-col">
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-6xl text-gray-500">የዛሬ አመጋገብ</h1>
      </div>

      <div className="flex-1 justify-center items-center mt-28  ">
        <div className="">
          {FoodData.map((food) => (
            <div className="flex justify-center items-center flex-wrap">
              <Link
                to={{
                  pathname: `/food/${food.name}`, // pass the food name as a URL parameter
                  state: { food: food }, // pass the food object as a prop
                }}
                className=" bg-blue-500 mx-12 text-5xl px-10 rounded-3xl text-white my-4 w-[150px] h-[100px] text-center"
              >
                {food.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FoodRecommendation;
