import React from "react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#E3F7FD] to-[#FFFFFF] px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-10">
        <div className="flex justify-center mb-6">
          <MdPersonAdd className="text-6xl bg-gradient-to-b from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent" />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Account
        </h2>

        <form className="space-y-6">
          <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#00D4FF] transition-colors py-3 px-3 rounded-md bg-gray-50">
            <FaUserAlt className="text-gray-400 mr-3 text-lg" />
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-gray-50"
            />
          </div>

          <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#00D4FF] transition-colors py-3 px-3 rounded-md bg-gray-50">
            <FaEnvelope className="text-gray-400 mr-3 text-lg" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-gray-50"
            />
          </div>

          <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#00D4FF] transition-colors py-3 px-3 rounded-md bg-gray-50">
            <FaLock className="text-gray-400 mr-3 text-lg" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-gray-50"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-b from-[#00D4FF] to-[#0084FF] hover:from-[#0084FF] hover:to-[#00D4FF] transition-all flex justify-center items-center gap-2 text-lg shadow-md"
          >
            <MdPersonAdd /> Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-semibold bg-gradient-to-b from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent hover:text-black"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
