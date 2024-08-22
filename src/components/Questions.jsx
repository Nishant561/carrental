import React, { useState } from "react";
import download from "../assets/images/download.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IconContext } from "react-icons";
import "../App.css";
function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleTextToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is special about comparing car deals?",
      answer:
        "Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing impression themselves to at assistance acceptance my or.",
    },
    {
      question: "How does the comparison process work?",
      answer:
        "The comparison process involves evaluating multiple car deals based on various factors such as price, features, and reviews. By analyzing these factors, you can make an informed decision that best suits your needs and budget.",
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${download})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
        className="w-full h-[400px] mt-7 mb-[200px]"
      >
        <div className="w-full h-full flex flex-col items-center">
          <h5 className="text-2xl font-medium ">FAQ</h5>
          <h1 className="text-5xl font-bold pt-2 pb-7">
            Frequently Asked Questions
          </h1>
          <p className="w-[50%] text-center text-zinc-500">
            Use securing confined his shutters. Delightful as he it acceptance
            an solicitude discretion reasonably. Carriage we husbands advanced
            an perceive greatest.
          </p>

          <div className="w-[650px] bg-white rounded-lg shadow-lg mt-4">
            {questions.map((items, index) => (
              <div key={index}>
                <div
                  onClick={() => handleTextToggle(index)}
                  className={`flex justify-between items-center p-3 font-semibold text-2xl transition-colors duration-300 ease-linear  ${
                    openIndex === index ? "bg-[#ff4d30]" : "bg-white"
                  } ${openIndex === index ? "text-white" : "text-black"} `}
                >
                  <h5 className="no-select ">
                    {index + 1}. {items.question}
                  </h5>
                  <IconContext.Provider
                    value={{ className: "w-[25px] h-[25px]" }}
                  >
                    {openIndex === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </IconContext.Provider>
                </div>

                <div
                  className={`transition-[max-height] duration-300 ease-linear overflow-hidden text-justify px-5 ${
                    openIndex === index ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  {items.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
