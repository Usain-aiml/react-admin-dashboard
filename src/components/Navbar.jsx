
import { FaBell, FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ThemeContext } from "../context/ThemeContext";


const Navbar = ({ setShowSidebar }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const [showNoti, setShowNoti] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const [notificationCount, setNotificationCount] = useState(2);
  const [isRead, setIsRead] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    toast.success("Logged Out Successfully");
    setShowProfile(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNoti(false);
      }

      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowNoti(false);
        setShowProfile(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleMarkAsRead = () => {
    setNotificationCount(0);
    setIsRead(true);
  };

  return (
    <div className="bg-white dark:bg-gray-900 h-16 md:h-20 shadow-sm flex items-center justify-between px-4 md:px-8 transition-colors duration-300">
      {/* Mobile Menu */}
      <button
        className="lg:hidden text-2xl text-gray-700 dark:text-white"
        onClick={() => setShowSidebar(true)}
      >
        <FaBars />
      </button>

      {/* Right Side */}
      <div className="flex items-center gap-4 md:gap-5 ml-auto">
        {/* Dark Mode Button */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition hover:scale-110"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-lg" />
          ) : (
            <FaMoon className="text-gray-700 text-lg" />
          )}
        </button>

        {/* Notification */}
        <div className="relative" ref={notificationRef}>
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setShowNoti(!showNoti);
              setShowProfile(false);
            }}
          >
            <FaBell className="text-gray-700 dark:text-white text-lg md:text-xl" />

            {!isRead && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </div>

          {showNoti && (
            <div className="absolute right-0 mt-4 w-[300px] sm:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border dark:border-gray-700 z-50">
              <div className="flex justify-between items-start p-4 border-b dark:border-gray-700">
                <div>
                  <h3 className="font-bold text-lg dark:text-white">
                    🔔 Notifications
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {isRead
                      ? "No new notifications"
                      : `You have ${notificationCount} new notifications`}
                  </p>
                </div>

                <button
                  onClick={() => setShowNoti(false)}
                  className="text-xl hover:text-red-500 dark:text-white"
                >
                  ✕
                </button>
              </div>

              <div
                className={`p-4 border-b dark:border-gray-700 dark:text-white ${
                  isRead
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-400"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                👤 New User Registered
              </div>

              <div
                className={`p-4 border-b dark:border-gray-700 dark:text-white ${
                  isRead
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-400"
                    : "hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                📊 Sales Report Updated
              </div>

              {!isRead && (
                <button
                  onClick={handleMarkAsRead}
                  className="w-full py-3 text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Mark as Read
                </button>
              )}
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full cursor-pointer"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNoti(false);
            }}
          />

          {showProfile && (
            <div className="absolute right-0 mt-4 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border dark:border-gray-700 z-50">
              <div className="p-5 text-center border-b dark:border-gray-700">
                <img
                  src="https://i.pravatar.cc/80"
                  alt="Profile"
                  className="w-16 h-16 rounded-full mx-auto"
                />

                <h2 className="font-bold mt-3 dark:text-white">
                  Mohammed Usain
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Full Stack Developer
                </p>
              </div>

              <div className="p-4 space-y-3">
                <button
                  onClick={() => {
                    navigate("/profile");
                    setShowProfile(false); // un state name vera irundha adha use pannu
                  }}
                  className="w-full text-left hover:text-blue-600 dark:text-white"
                >
                  👤 My Profile
                </button>

                <button className="w-full text-left hover:text-blue-600 dark:text-white">
                  ⚙️ Settings
                </button>

                <button className="w-full text-left hover:text-blue-600 dark:text-white">
                  🔒 Change Password
                </button>

                <hr className="dark:border-gray-600" />

                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;