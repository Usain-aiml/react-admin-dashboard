
import { MdDashboard, MdLogin, MdPersonAdd } from "react-icons/md";
import { FaRegFileAlt, FaRegSmile } from "react-icons/fa";
import { BsType } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import assets from "../assets/logo.svg";
import { toast } from "react-toastify";

const Sidebar = ({
  showSidebar,
  setShowSidebar,
  setShowLogin,
  setShowRegister,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    toast.success("Logged Out Successfully");
    setShowSidebar(false);
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static
          top-0 left-0
          h-screen
          w-65
          bg-white dark:bg-gray-900
          shadow-md
          flex flex-col
          z-50
          transition-transform
          duration-300
          ${
            showSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between border-b dark:border-gray-700">
          <img
            src={assets}
            alt="Logo"
            className="w-36 lg:w-44 cursor-pointer"
          />

          <button
            className="lg:hidden text-2xl dark:text-white"
            onClick={() => setShowSidebar(false)}
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <div className="px-4 pt-6">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
              HOME
            </p>

            <div className="bg-[#5D87FF] text-white rounded-lg flex items-center gap-3 px-3 py-3 cursor-pointer">
              <MdDashboard size={20} />
              Dashboard
            </div>
          </div>

          <div className="px-4 mt-8">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
              UTILITIES
            </p>

            <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white cursor-pointer transition">
              <BsType size={20} />
              Typography
            </div>

            <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white cursor-pointer transition">
              <FaRegFileAlt size={18} />
              Shadow
            </div>
          </div>

          <div className="px-4 mt-8">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
              AUTH
            </p>

            <div
              onClick={() => {
                setShowLogin(true);
                setShowSidebar(false);
              }}
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white cursor-pointer transition"
            >
              <MdLogin size={20} />
              Login
            </div>

            <div
              onClick={() => {
                setShowRegister(true);
                setShowSidebar(false);
              }}
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white cursor-pointer transition"
            >
              <MdPersonAdd size={20} />
              Register
            </div>
          </div>

          <div className="px-4 mt-8 pb-6">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
              EXTRA
            </p>

            <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white cursor-pointer transition">
              <FaRegSmile size={18} />
              Icons
            </div>

            <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white cursor-pointer transition">
              <FaRegFileAlt size={18} />
              Sample Page
            </div>
          </div>
        </div>

        {/* Bottom Profile */}
        <div className="border-t dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/50"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h3 className="font-semibold text-sm dark:text-white">
                Mohammed Usain
              </h3>

              <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="mt-4 w-full bg-[#5D87FF] text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;