import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import Qoute from "../Components/Qoute";
import { useGlobalContext } from "../Context";

const Home = () => {
  const { setActiveCategory } = useGlobalContext();
  return (
    <>
      <main className=" w-full min-h-full flex items-center justify-center">
        <div className=" course-container grid lg:grid-cols-3 gap-7 w-[95%] min-h-[80vh] place-items-center justify-items-center p-3">
          {data.map((item) => {
            const { image, title, id, year, category } = item;
            return (
              <div
                className="border-2 border-white w-full min-h-[20rem] bg-blue-100 rounded-sm shadow-xl hover:translate-y-[-.75rem] duration-300"
                key={id}
              >
                <div className="image-container">
                  <img
                    src={image}
                    alt=""
                    className="h-[15rem] w-full object-cover "
                  />
                </div>
                <div className="text-container p-2 flex items-center justify-between">
                  <div>
                    <h1 className="mt-3 text-xl text-cyan-600 font-bold">
                      {title}
                    </h1>
                    <h2 className="font-light">{year}</h2>
                  </div>
                  <button
                    className="text-cyan-600 border-2 border-cyan-600 h-[2.5rem] w-[6rem] mr-[5%] hover:bg-cyan-600 hover:text-white rounded-md"
                    onClick={() => setActiveCategory(category)}
                  >
                    <Link to={`/${category}`}>Outline</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Qoute />
    </>
  );
};

export default Home;
