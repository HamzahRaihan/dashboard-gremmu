import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="">
      <div className="">
        <button type="button" className="items-center text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded={isDropdownOpen} onClick={toggleDropdown}>
          <span className="sr-only">Open user menu</span>
          <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/Jese%20Leos.png?updatedAt=1697535830098" className="w-8 h-8 rounded-full" alt="user photo" />
        </button>

        {isDropdownOpen && (
          <div className="z-50 right-10 absolute mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
            <div className="px-4 py-3" role="none">
              <p className="text-sm text-gray-900 dark:text-white" role="none">
                Jese Leos
              </p>
              <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                jeseleos@gmail.com
              </p>
            </div>
            <ul className="py-1" role="none">
              <Link>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                  Settings
                </a>
              </Link>
              <Link>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                  Keluar
                </a>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
