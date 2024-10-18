import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [answer, setAnswer] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-rose-50 min-h-screen items-center justify-center flex w-full">
      <div className="w-96 min-h-[calc(100vh-250px)] mt-10  bg-white">
        <img
          className="h-32 w-full"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg "
          alt=""
        />
        <h1 className="font-Assistant text-2xl font-bold mt-2 mb-4 flex justify-center">
          Register Page
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 flex justify-center">
            <input
              className="border border-gray-300 text-sm py-2 w-80 leading-6  text-gray-700"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="exampleInputName"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-2 flex justify-center">
            <input
              className="border border-gray-300 text-sm py-2 w-80 leading-6  text-gray-700"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-2 flex justify-center">
            <input
              className="border border-gray-300 text-sm py-2 w-80 leading-6  text-gray-700"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-2 flex justify-center">
            <input
              className="border border-gray-300 text-sm py-2 w-80 leading-6  text-gray-700"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="exampleInputEmail"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-2 flex justify-center">
            <input
              className="border border-gray-300 text-sm py-2 w-80 leading-6  text-gray-700"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="exampleInputEmail"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-2 flex justify-center">
            <input
              className="border border-gray-300 text-sm py-2 w-80 leading-6  text-gray-700"
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              id="exampleInputEmail"
              placeholder="What is your favorite thing to do ??"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="cursor-pointer my-2 bg-pink-600  w-80 text-center py-3 px-4 text-white font-semibold text-base leading-6"
            >
              Submit
            </button>
          </div>
          <p className="pb-4 text-xs text-stone-400 flex justify-center">
          Already a User?{" "}
          <span className="text-pink-500 font-bold"><Link to={'/login'}>Go to Login Page</Link></span>
        </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
