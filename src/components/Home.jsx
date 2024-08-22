import React, { useState, useEffect } from "react";
import banner_image from "../assets/images/banner_image.png";
import Button from "./Button";
import banner_car from "../assets/images/banner_car.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IconContext } from "react-icons";
import { FaCar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import MainHome from "./MainHome";
import { useSelector } from "react-redux";
import { IoLocation } from "react-icons/io5";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import MainTestimonials from "./MainTestimonials";

function Home() {
  const optionCars = useSelector((state) => state.description.optionVehicle);

  const [displayCar, setDisplayCar] = useState();
  const [selectedCar, setSelectedCar] = useState("");
  const [selectPickUp, setSelectedPickUp] = useState("");
  const [selectDropOff, setSelectedDropOff] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const [overlay, setOverlay] = useState(false);
  var commonAnimation = gsap.timeline();

  useGSAP(() => {
    gsap.from(".left-container", {
      x: "-80%",
      duration: 0.6,
      opacity: 0,
    });

    gsap.from(".right-container img", {
      x: 1500,
      duration: 0.6,
      opacity: 0,
    });


    gsap.from('.from',{
      y: 200,
      opacity:0,
      scrollTrigger:{
        trigger:'.form-container',
        scroller:'body',
        


      }
    })
  });




  function handleChange(e) {
    setSelectedCar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      selectedCar.trim().length <= 0 ||
      selectPickUp.trim().length <= 0 ||
      selectDropOff.trim().length <= 0 ||
      pickupDate.trim().length <= 0 ||
      pickupTime.trim().length <= 0 ||
      dropoffDate.trim().length <= 0 ||
      dropoffTime.trim().length <= 0
    ) {
      alert("Please Enter All the details");
      return;
    }
    const data = optionCars.filter(
      (items, index) => items.vehicleName.toString() === selectedCar.toString()
    );

    setDisplayCar(data);
    setOverlay(true);
  }

  function handleCloseOverlay() {
    setOverlay(false);
  }

  useEffect(() => {
    if (overlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [overlay]);
  return (
    <>
      {overlay && (
        <div
          className="fixed inset-0 flex  justify-center items-center bg-[rgba(0,0,0,0.5)] z-50"
          onClick={handleCloseOverlay}
        >
          <div
            className="bg-white w-[70%] p-[1px]  relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full items-center p-3 bg-[#ff4c31] flex justify-between">
              <h1 className="text-2xl font-bold text-white">
                Complete Reservation
              </h1>
              <button className=" text-gray-600" onClick={handleCloseOverlay}>
                Close
              </button>
            </div>
            <div className="w-full p-4 bg-red-200 pb-7 ">
                  <h2 className="font-semibold text-2xl text-[#ff4c31]">Upon completing this reservation enquiry, you will receive:::</h2>
                  <p className="text-xl pt-4 text-zinc-500">Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
            </div>

            <div className="flex p-10 w-full justify-between 675:flex-col">
              <div className="flex flex-col gap-4">
                  <h1 className="text-[#ff4c31] font-semibold text-xl">Location & Date</h1>
                  <div>
                    <p className="flex gap-2 items-center"><IoLocation/> <span className="font-bold">Pickup-Time</span> </p>
                    <p className="text-zinc-500 pl-4">{pickupDate} {pickupTime}</p>
                  </div>
                  <div>
                    <p className="flex gap-2 items-center"><IoLocation/> <span className="font-bold">DropOff-Time</span> </p>
                    <p className="text-zinc-500 pl-4">{dropoffDate} {dropoffTime}</p>
                  </div>
                  <div>
                    <p className="flex gap-2 items-center"><FaCalendarDays/> <span className="font-bold">Pickup-location</span> </p>
                    <p className="text-zinc-500 pl-4">{selectPickUp}</p>
                  </div>
                  <div>
                    <p className="flex gap-2 items-center"><FaCalendarDays/> <span className="font-bold">DropOff-location</span> </p>
                    <p className="text-zinc-500 pl-4">{selectDropOff}</p>
                  </div>
              </div>
              <div className="float-left"> 
                    <h1 className="text-[#ff4c31] text-2xl font-semibold">Car:: {displayCar[0].vehicleName}</h1>
                    <div className="w-[400px] pt-5 955:w-[200px]">
                      <img className="w-full object-contain object-center" src={displayCar[0].img} />
                    </div>
              </div>
            </div>
            
          </div>
        </div>
      )}
      <div className="w-[100%]  relative  h-[100vh] bg-[#ececec]">
        <div className="content-container flex justify-between items-center w-[100%] h-[100%]">
          <div className="left-container flex flex-col relative   w-[45%] px-12 879:w-full">
            <h4 className="font-semibold text-2xl pb-5">Plan your trip now</h4>
            <h1 className="text-6xl font-bold leading-[3.5rem] pb-6 cursor-pointer group">
              Save{" "}
              <span className="group-hover:text-[#ff4c31] transition-colors">
                big
              </span>{" "}
              with our car rental
            </h1>
            <p className="text-zinc-600 text-xl">
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </p>
            <div className="button-home mt-6 flex items-center gap-4">
              <Button text="Book Ride" />
              <Button text="Learn More" />
            </div>
          </div>

          <div className="right-container relative flex-none h-full w-[50%] 879:hidden">
            <div
              className="absolute inset-0 bg-no-repeat bg-cover bg-right  1069:hidden"
              style={{ backgroundImage: `url(${banner_image})` }}
            ></div>
            <img
              className="w-full absolute left-[-15%] h-full object-contain object-center"
              src={banner_car}
              alt="Car"
            />
          </div>
        </div>
      </div>

      <div className="form-container from w-[85%] mx-auto mt-5 mb-24 shadow-lg p-3 rounded-xl">
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-2xl font-bold">Book a car</h1>
          <p className="font-semibold  text-2xl text-white cursor-pointer group  bg-slate-700 px-3 py-2 rounded-tl-lg rounded-tr-lg relative 879:hidden  ">
            <span className="group-hover:text-black transition-colors">
              SAVE 15%
            </span>{" "}
            if you prepay your booking
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="  w-full pt-10  flex  flex-col gap-4  "
        >
          <div className="grid grid-cols-[280px_1fr_1fr] gap-2 1129:inline-block">
            <div className="flex flex-col items-start justify-center gap-3 1129:mb-4">
              <div className="flex items-center gap-3">
                <IconContext.Provider
                  value={{ className: "text-[#ff4c31] w-[25px] h-[25px]" }}
                >
                  <FaCar />
                </IconContext.Provider>
                <h5 className="text-xl">Select Your Car Type</h5>
              </div>
              <select
                name="carType"
                value={selectedCar}
                onChange={handleChange}
                className="border-2 rounded px-6 py-2 text-xl text-zinc-500 1129:w-full"
              >
                {optionCars.map((items, index) => (
                  <option key={index} value={items.vehicleName}>
                    {items.vehicleName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-start justify-center gap-3 1129:w-[48%] 1129:inline-block mr-4 ">
              <div className="flex items-center gap-3">
                <IconContext.Provider
                  value={{ className: "text-[#ff4c31] w-[25px] h-[25px]" }}
                >
                  <MdLocationPin />
                </IconContext.Provider>
                <h5 className="text-xl">Pick-up</h5>
              </div>
              <select
                name="carType"
                value={selectPickUp}
                onChange={(e) => setSelectedPickUp(e.target.value)}
                className="border-2 rounded px-6 py-2 text-xl text-zinc-500 w-full"
              >
                <option value="Kapan, Kathmandu">Kapan, Kathmandu</option>
                <option value="chabahil, Kathmandu">chabahil, Kathmandu</option>
              </select>
            </div>
            <div className="flex flex-col items-start justify-center gap-3 1129:w-[48%] 1129:inline-block">
              <div className="flex items-center gap-3">
                <IconContext.Provider
                  value={{ className: "text-[#ff4c31] w-[25px] h-[25px]" }}
                >
                  <MdLocationPin />
                </IconContext.Provider>
                <h5 className="text-xl">Drop-of</h5>
              </div>
              <select
                name="carType"
                value={selectDropOff}
                onChange={(e) => setSelectedDropOff(e.target.value)}
                className="border-2 rounded px-6 py-2 text-xl text-zinc-500 w-full"
              >
                <option value="chabahil, Kathmandu">Chabahil ,Kathmandu</option>
                <option value="Kapan,Kathmandu">Kapan ,Kathmandu</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 1129:flex 1129:flex-col 1129:items-start">
            <div className="flex flex-col items-start justify-center gap-3 1129:w-full">
              <div className="flex items-center gap-3">
                <IconContext.Provider
                  value={{ className: "text-[#ff4c31] w-[25px] h-[25px]" }}
                >
                  <FaCalendarDays />
                </IconContext.Provider>
                <h5 className="text-xl">Pick-up</h5>
              </div>
              <div className="flex items-center gap-3 1129:w-full 1129:justify-between">
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="text-zinc-400 px-6 py-2 text-xl border 1129:w-[48%] "
                />
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="text-zinc-400 px-6 py-2 text-xl border 1129:w-[48%] "
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-3 1129:w-full">
              <div className="flex items-center gap-3">
                <IconContext.Provider
                  value={{ className: "text-[#ff4c31] w-[25px] h-[25px]" }}
                >
                  <FaCalendarDays />
                </IconContext.Provider>
                <h5 className="text-xl">Drop-off</h5>
              </div>
              <div className="flex items-center gap-3 1129:w-full 1129:justify-between">
                <input
                  type="date"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                  className="text-zinc-400 px-6 py-2 text-xl border 1129:w-[48%]"
                />
                <input
                  type="time"
                  value={dropoffTime}
                  onChange={(e) => setDropoffTime(e.target.value)}
                  className="text-zinc-400 px-6 py-2 text-xl border 1129:w-[48%]"
                />
              </div>
            </div>

            <div className="w-full h-full justify-center flex   items-end">
              <button className=" text-xl font-semibold px-[2.75rem] py-2 text-white rounded-md bg-[#ff4c31]">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <MainHome />
    </>
  );
}

export default Home;
