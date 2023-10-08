import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function Spinners() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 0) {
      toast.error('You should login to access that link');
      navigate("/login");
    }
  }, [count, navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h3>redirecting to you in {count} seconds</h3>
      <br />
      <div className="inline-block animate-spin rounded-full border-t-4 border-black border-solid h-6 w-6"></div>
    </div>
  );
}

export default Spinners;
