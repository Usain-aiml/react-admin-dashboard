
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginModel = ({ close, openRegister }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [close]);

 
  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      toast.warning("Please fill all fields");
      return;
    }

    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login Successful");
      close();
      navigate("/dashboard");
    } else {
      toast.error("Invalid Email or Password");
    }
  };
 
  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={close}
    >
      <div
        className="bg-white w-105 rounded-xl shadow-xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-500"
        >
          ×
        </button>

        <h1 className="text-4xl font-bold mb-3">Login</h1>

        <p className="text-gray-500 mb-6">Please log in to book appointment</p>

        <label className="block mb-2 font-medium">Email</label>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 mb-5 outline-none focus:border-blue-500"
        />

        <label className="block mb-2 font-medium">Password</label>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500"
        />

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mt-6"
        >
          Login
        </button>

        <p className="text-center mt-5 text-gray-500">
          Create a new account?{" "}
          <span onClick={openRegister} className="text-blue-600 cursor-pointer">
            Click here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModel;