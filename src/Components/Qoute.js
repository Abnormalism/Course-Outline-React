import React, { useEffect, useState } from "react";

const Qoute = () => {
  const url = "https://type.fit/api/quotes";
  const [qoutes, setQoutes] = useState();
  const [isloading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQoutes(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (window.innerWidth > 375) {
    if (!isloading) {
      const randomNumber = Math.floor(Math.random() * qoutes.length);
      const { text, author } = qoutes[randomNumber];
      return (
        <div className="w-[50%] absolute left-[50%] translate-x-[-50%] translate-y-[-2.5rem]">
          <h1 className="text-xl text-center text-white font-bold">
            {text} <span className="font-light ml-3">-{author}</span>
          </h1>
        </div>
      );
    }
  }
};

export default Qoute;
