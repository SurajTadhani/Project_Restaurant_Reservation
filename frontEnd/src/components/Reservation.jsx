import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

function Reservation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();



  const handleReservation = async (e) => {
    e.preventDefault();
  
    if (!firstName || !lastName || !email || !phone || !date || !time) {
      toast.error("All fields are required!");
      return;
    }
  
    try {
      const { data } = await axios.post(
        "https://project-restaurant-reservation.vercel.app/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
  
      console.log("API Response:", data); // Debugging
      toast.success(data.message || "Reservation successful!"); // Success toast
  
      // Clear form fields
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
  
      // Add delay before navigating to success page
      setTimeout(() => navigate("/success"), 1000);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message); // Debugging
      toast.error(error.response?.data?.message || "Submission failed!");
    }
  };
  

  return (
    <>
      <div className="flex flex-col lg:flex-row py-52">
        <div className="lg:w-1/2 flex justify-center items-center">
          <img className="md:w-[500px]" src="/reservation.png" alt="res" />
        </div>

        <div className="flex justify-center shadow-2xl shadow-pink-200">
          <form className="border-2 px-16 py-20 space-y-10">
            <div className="flex justify-between space-x-5">
              <div>
                <label className="text-xl text-black" htmlFor="firstName">
                  First Name :{" "}
                </label>

                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  className="bg-white text-black border-b-2 border-black px-4"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xl text-black" htmlFor="lastName">
                  Last Name :{" "}
                </label>

                <input
                  type="text"
                  className="bg-white text-black border-b-2 border-black px-4"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex space-x-12 ">
              <div>
                <label className="text-xl text-black pe-5" htmlFor="date">
                  Date :{" "}
                </label>

                <div className="relative inline-flex items-center">
                  <input
                    type="date"
                    placeholder="Date"
                    className="bg-white text-black border-b-2 border-black px-10 pr-10"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  
                </div>
              </div>
              <div>
                <label className="text-xl text-black pe-5" htmlFor="time">
                  Time :{" "}
                </label>

                <div className="relative inline-flex items-center">
                  <input
                    type="time"
                    placeholder="Time"
                    className="bg-white text-black border-b-2 border-black px-16 pr-10"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                 
                </div>
              </div>
            </div>
            <div className="flex space-x-12">
              <div>
                <label className="text-xl text-black pe-5" htmlFor="email">
                  Email :{" "}
                </label>

                <input
                  type="email"
                  placeholder="Enter Email"
                  className="bg-white text-black border-b-2 border-black px-5"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xl text-black pe-5" htmlFor="phone">
                  Phone :{" "}
                </label>

                <input
                  type="number"
                  className="bg-white text-black border-b-2 border-black px-7"
                  placeholder="Enter Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <button
              onClick={handleReservation}
              type="submit"
              className="flex items-center border px-10 py-2 rounded-xl hover:bg-black hover:text-white text-black border-black duration-500"
            >
              RESERVE NOW
              <span className="ml-2">
                <HiOutlineArrowNarrowRight />
              </span>
            </button>
          </form>

          {/* <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form> */}
        </div>
      </div>
    </>
  );
}

export default Reservation;
