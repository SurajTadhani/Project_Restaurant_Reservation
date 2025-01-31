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
        "http://localhost:6200/api/v1/reservation/send",
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
    <div className="dark:bg-black ">
      <div className="flex flex-col lg:flex-row py-52">
        <div className="lg:w-1/2 flex justify-center items-center">
          <img className="md:w-[500px]" src="/reservation.png" alt="res" />
        </div>

        <div className="flex justify-center shadow-2xl shadow-pink-200">
        <form className="border-2 px-16 py-24 space-y-10">
  <div className="flex flex-col space-y-10">
   <div className="grid grid-cols-2 gap-5">
   <div>
      <label className="text-xl text-black dark:text-white" htmlFor="firstName">
        First Name :
      </label>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        className="bg-white text-black  border-b-2 border-black px-4 py-2 w-full"
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>

    <div>
      <label className="text-xl text-black dark:text-white" htmlFor="lastName">
        Last Name :
      </label>
      <input
        type="text"
        className="bg-white text-black border-b-2 border-black px-4 py-2 w-full"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>

   </div>
   <div className="grid grid-cols-2 gap-5">
   <div>
      <label className="text-xl text-black dark:text-white pe-5" htmlFor="date">
        Date :
      </label>
      <input
        type="date"
        placeholder="Date"
        className="bg-white text-black border-b-2 border-black px-4 py-2 w-full cursor-pointer"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>

    <div>
      <label className="text-xl text-black dark:text-white pe-5" htmlFor="time">
        Time :
      </label>
      <input
        type="time"
        placeholder="Time"
        className="bg-white text-black border-b-2 border-black px-4 py-2 w-full cursor-pointer"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </div>

   </div>
   <div className="grid grid-cols-2 gap-5">
   <div>
      <label className="text-xl text-black dark:text-white pe-5" htmlFor="email">
        Email :
      </label>
      <input
        type="email"
        placeholder="Enter Email"
        className="bg-white text-black border-b-2 border-black px-4 py-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div>
      <label className="text-xl text-black dark:text-white pe-5" htmlFor="phone">
        Phone :
      </label>
      <input
        type="number"
        className="bg-white text-black border-b-2 border-black px-4 py-2 w-full"
        placeholder="Enter Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
   </div>
  </div>

  <button
    onClick={handleReservation}
    type="submit"
    className="flex items-center border px-10 py-2 rounded-xl hover:bg-black hover:text-white text-black border-black duration-500 mt-5 dark:text-white dark:border-white"
  >
    RESERVE NOW
    <span className="ml-2">
      <HiOutlineArrowNarrowRight />
    </span>
  </button>
</form>


         
        </div>
      </div>
    </div>
  );
}

export default Reservation;
