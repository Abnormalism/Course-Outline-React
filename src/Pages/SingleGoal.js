import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import { outline } from "../data";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SingleGoal = () => {
  const { activeCategory } = useGlobalContext();

  if (activeCategory) {
    const filteredItem = outline.filter(
      (items) => items.category === activeCategory
    );
    return (
      <>
        <Link
          to="/"
          className="mt-3 ml-14 bg-blue-100 h-[2rem] w-[5rem] rounded-md flex items-center justify-center"
        >
          <IoExitOutline className="mr-1" />
          Back
        </Link>
        <main className=" w-full min-h-full flex items-center justify-center">
          <div className=" course-container grid lg:grid-cols-3 gap-7 w-[95%] min-h-[80vh] place-items-center justify-items-center p-3">
            {filteredItem.map((item) => {
              const { image, title, id, status, url } = item;
              return (
                <div
                  className={`border-2 border-white w-full min-h-[20rem] bg-blue-100 rounded-sm shadow-xl hover:translate-y-[-.75rem] duration-300 ${
                    !status && "grayscale"
                  }
                `}
                  key={id}
                >
                  <div className="image-container">
                    <img
                      src={image}
                      alt=""
                      className="h-[15rem] w-full object-cover"
                    />
                  </div>
                  <div className="text-container p-2 flex items-center justify-around mt-3">
                    <div>
                      <h1 className="text-xl text-cyan-600 font-bold text-center">
                        {title}
                        {status && (
                          <span
                            className={`${
                              status === "ongoing"
                                ? "text-red-500"
                                : "text-lime-700"
                            }  capitalize`}
                          >
                            |{status}
                          </span>
                        )}
                      </h1>
                    </div>
                    <div>
                      <a href={url} target={"_blank"} rel="noreferrer">
                        <AiOutlineFolderOpen className="text-lime-800 text-2xl" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </>
    );
  }
};

export default SingleGoal;
