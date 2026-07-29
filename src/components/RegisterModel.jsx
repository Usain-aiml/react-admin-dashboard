import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const RegisterModal = ({ close, openLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleRegister = () => {
    if (!name || !email || !password) {
      toast.warning("Please fill all fields");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        email,
        password,
      }),
    );

    toast.success("Account Created Successfully");

    close();

    setTimeout(() => {
      openLogin();
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={close}
    >
      <div
        className="bg-white w-[420px] rounded-xl shadow-xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-500"
        >
          ×
        </button>

        <h1 className="text-4xl font-bold mb-3">Create Account</h1>

        <p className="text-gray-500 mb-6">Please Sign Up to book appointment</p>

        <label className="block mb-2 font-medium">Full Name</label>

        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 mb-5 outline-none focus:border-blue-500"
        />

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
          className="w-full border rounded-lg px-4 py-3 mb-6 outline-none focus:border-blue-500"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Create Account
        </button>

        <p className="text-center mt-5 text-gray-500">
          Already have an account?{" "}
          <span onClick={openLogin} className="text-blue-600 cursor-pointer">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;