
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SalesChart from "../components/SalesChart";
import YearlyCard from "../components/YearlyCard";
import MonthlyCard from "../components/MonthlyCard";
import LoginModel from "../components/LoginModel";
import RegisterModel from "../components/RegisterModel";

const Dashboard = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F5F7FA] dark:bg-gray-950 overflow-x-hidden transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#F5F7FA] dark:bg-gray-950 transition-colors duration-300">
        {/* Navbar */}
        <Navbar setShowSidebar={setShowSidebar} />

        {/* Dashboard Content */}
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Sales Chart */}
            <div className="lg:col-span-2">
              <SalesChart />
            </div>

            {/* Right Side Cards */}
            <div className="flex flex-col gap-6 min-w-0">
              <YearlyCard />
              <MonthlyCard />
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <LoginModel
          close={() => setShowLogin(false)}
          openRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {/* Register Modal */}
      {showRegister && (
        <RegisterModel
          close={() => setShowRegister(false)}
          openLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;