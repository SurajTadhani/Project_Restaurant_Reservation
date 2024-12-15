import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <>
      <section className="py-36">
        <div className="container flex justify-center items-center">
        <div className="text-center space-y-5">
        <img src="/notFound.svg" alt="notFound" />
          <h1 className="text-lg">LOOKS LIKE YOU'RE LOST</h1>
          <p className="text-lg">We can't seem to find you the page you're looking for</p>
          <Link className="flex items-center justify-center text-3xl" to={"/"}>
            Back to Home &nbsp;{"  "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;