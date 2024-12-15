import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section className="py-36">
        <div className="container flex justify-center items-center">
         <div className="text-center">
         <img src="/sandwich.png" alt="success" />
          <h1 className="">Redirecting to Home in {countdown} seconds...</h1>
          <Link className="text-3xl flex items-center justify-center" to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
         </div>
        </div>
      </section>
    </>
  );
};

export default Success;