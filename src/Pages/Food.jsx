// Food.jsx
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FoodData } from "../data";

const Food = () => {
  const { name } = useParams(); // get the food name from the URL parameter
  const location = useLocation(); // get the location object
  const { state } = location; // get the state object

  // store the state in the browser's history
  useEffect(() => {
    if (state) {
      window.history.replaceState(
        {
          ...window.history.state,
          state,
        },
        ""
      );
    }
  }, [state]);

  function findFoodByName(FoodData, name) {
    // use the find method to search for the food object by name
    return FoodData.find((food) => food.name === name);
  }

  const foodItem = findFoodByName(FoodData, name);

  return (
    <div className="flex-col">
      <div className="flex flex-1 justify-center items-center text-center">
        <h1 className="text-5xl bg-gray-500 text-white mt-20 rounded-xl w-[200px] py-4">
          {name}
        </h1>
      </div>
      <div className="flex-1 mt-10 ">
        <p className="text-green-500 text-2xl ml-5">የካርቦሃይድሬት ብዛት</p>
        <div className="bg-gray-400 w-[250px] h-[100px] mx-auto mt-4 text-lg text-white text-center rounded-xl">
          {foodItem.carbContent} ኪሎ ካሎሪ
        </div>
      </div>

      <div className="flex-1 mt-10">
        <p className="text-green-500 text-2xl ml-5">ግብዓቶች</p>
        <div className="bg-gray-400 w-[250px] h-[100px] mx-auto mt-4 text-white text-lg text-center rounded-xl">
          {foodItem.ingredient}
        </div>
      </div>
    </div>
  );
};
export default Food;
