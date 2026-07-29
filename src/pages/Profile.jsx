import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserEdit,
  FaLock,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] dark:bg-gray-950 p-6 transition-all duration-300">
      {/* Main Card */}
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
        {/* Cover Banner */}
        <div className="h-52 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative">
          {/* Profile Image */}
          <div className="absolute left-1/2 -bottom-16 -translate-x-1/2">
            <img
              src="https://i.pravatar.cc/180"
              alt="Profile"
              className="w-36 h-36 rounded-full border-[6px] border-white dark:border-gray-900 shadow-xl"
            />

            {/* Online Status */}
            <div className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 border-4 border-white dark:border-gray-900 rounded-full"></div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="pt-24 pb-10 px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Mohammed Usain
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
              Full Stack Developer
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
                <FaUserEdit />
                Edit Profile
              </button>

              <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition">
                <FaLock />
                Change Password
              </button>
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-5 dark:text-white">
                Personal Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-blue-600 text-xl" />
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="font-semibold dark:text-white">
                      usain@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhone className="text-green-600 text-xl" />
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="font-semibold dark:text-white">
                      +91 9876543210
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-red-500 text-xl" />
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="font-semibold dark:text-white">
                      Madurai, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 text-center">
                <h1 className="text-3xl font-bold text-blue-600">12</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Projects
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 text-center">
                <h1 className="text-3xl font-bold text-green-600">15+</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Skills</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 text-center">
                <h1 className="text-3xl font-bold text-purple-600">8.0</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">CGPA</p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6 text-center">
                <h1 className="text-3xl font-bold text-orange-600">2026</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Graduation
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Skills</h2>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold dark:text-white">React</span>
                  <span className="text-blue-600 font-semibold">90%</span>
                </div>

                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-3 bg-blue-600 rounded-full w-[90%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold dark:text-white">Node.js</span>
                  <span className="text-green-600 font-semibold">80%</span>
                </div>

                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-3 bg-green-600 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold dark:text-white">MongoDB</span>
                  <span className="text-purple-600 font-semibold">75%</span>
                </div>

                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-3 bg-purple-600 rounded-full w-[75%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold dark:text-white">
                    Express.js
                  </span>
                  <span className="text-orange-600 font-semibold">85%</span>
                </div>

                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-3 bg-orange-500 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;