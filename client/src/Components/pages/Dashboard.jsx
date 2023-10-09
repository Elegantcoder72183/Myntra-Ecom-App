import React from "react";
import UserMenu from "../Dashboard/UserMenu";
import { useAuth } from "../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <div className="mt-32">
      <div className="flex justify-center">
        <div className="w-80 sm:w-96 p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">User Information</h3>
            <div className="mb-4">
              <strong>Name:</strong> {auth?.user?.name}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {auth?.user?.email}
            </div>
            <div>
              <strong>Contact:</strong> {auth?.user?.phone}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {/* <UserMenu /> */}
      </div>
    </div>
  );
};

export default Dashboard;
