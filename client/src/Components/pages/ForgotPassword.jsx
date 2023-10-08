import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [answer, setAnswer] = useState();
  const navigate = useNavigate();


  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
       
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
      <div className="w-96 min-h-[calc(100vh-250px)] mt-10  bg-stone-50">
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg "
          alt=""
        />
        <h1 className="font-Assistant text-2xl font-bold mt-4 justify-center flex mb-6">
          Reset Password
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="justify-center flex">
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
          <div className="justify-center flex mt-4">
            <input
              className="border border-gray-300 text-sm py-2 w-80 leading-6  text-gray-700"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              id="exampleInputPassword"
              placeholder="Enter New Password"
              required
            />
          </div>

          <div className="justify-center flex">
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
         
          <div className="justify-center flex">
            <button
              type="submit"
              className="cursor-pointer mt-2 bg-pink-600  w-80 text-center py-3 px-4 text-white font-semibold text-base leading-6"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
