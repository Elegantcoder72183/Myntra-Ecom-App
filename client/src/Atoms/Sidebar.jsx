import React, { useState, useEffect } from "react";

const Sidebar = () => {
    const [isDesktopView, setIsDesktopView] = useState(true); // Assume desktop view initially

    // Check viewport width on component mount and window resize
    useEffect(() => {
      function handleResize() {
        setIsDesktopView(window.innerWidth >= 768); // Adjust the breakpoint as needed
      }
      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return isDesktopView ? (
      <div className="w-80 bg-stone-50  overflow-y-auto">
        <div className=" px-16">
          <h3 className="text-lg font-semibold my-2">Filters</h3>
          <ul className="mb-6">
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                  name="category" // Add the same name attribute for all radio buttons in the group
                />
                <span className="ml-2">MEN</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                  name="category" // Add the same name attribute for all radio buttons in the group
                />
                <span className="ml-2">WOMEN</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                  name="category" // Add the same name attribute for all radio buttons in the group
                />
                <span className="ml-2">KIDS</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                  name="category" // Add the same name attribute for all radio buttons in the group
                />
                <span className="ml-2">HOME & LIVING</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                  name="category" // Add the same name attribute for all radio buttons in the group
                />
                <span className="ml-2">BEAUTY</span>
              </label>
            </li>
          </ul>

          <h3 className="text-lg font-semibold my-2">BRANDS</h3>
          <ul className="mb-6">
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                />
                <span className="ml-2">Roadster</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                />
                <span className="ml-2">Louis Philippe</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                />
                <span className="ml-2">HIGHLANDER</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                />
                <span className="ml-2">Arrow</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                />
                <span className="ml-2">Alley Solly</span>
              </label>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">PRICE</h3>
          <ul className="mb-6">
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                />
                <span className="ml-2">Rs. 189 to Rs. 400</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                />
                <span className="ml-2">Rs. 400 to Rs. 1200</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                />
                <span className="ml-2">Rs. 1200 to Rs. 3500</span>
              </label>
            </li>
            <li className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="rounded-full border border-black border-opacity-20 text-indigo-600 focus:ring-0"
                />
                <span className="ml-2">Rs. 3500 to Rs. ...</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    ) : null;
  };

export default Sidebar;
