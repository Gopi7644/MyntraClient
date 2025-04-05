import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: phone/email, 2: OTP
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setPhoneOrEmail(data.phoneOrEmail);

    try {
      const res = await axios.post("https://myntraserver-oskf.onrender.com/api/send-otp", {
        phoneOrEmail: data.phoneOrEmail,
      });
      setMessage(res.data.message);
      setStep(2); // Move to OTP input step
    } catch (error) {
      setMessage(error.response?.data?.error || "Something went wrong. Please try again.");
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://myntraserver-oskf.onrender.com/api/verify-otp", {
        phoneOrEmail,
        otp,
      });
      setMessage(res.data.message);
      navigate("/userDashboard");
    } catch (error) {
      setMessage(error.response?.data?.error || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Offer Banner */}
        <div className="bg-pink-100 p-4 rounded-t-lg flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Flat ₹300 OFF +</h2>
            <p className="text-sm text-gray-700 font-semibold">Free Shipping</p>
            <p className="text-xs text-gray-500">On First Order</p>
            <div className="mt-1">
              <span className="text-sm font-bold bg-gray-200 px-2 py-1 rounded">
                Code: <span className="text-gray-800">MYNTRA300</span>
              </span>
            </div>
          </div>
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
            alt="Offer"
            className="h-20"
          />
        </div>

        {/* Login/Signup Form */}
        <div className="bg-white shadow-md p-6 rounded-b-lg">
          <h2 className="text-xl font-semibold mb-4">
            <span className="text-gray-800">{step === 1 ? "Login" : "Verify"}</span> or{" "}
            <span className="text-gray-900 font-bold">{step === 1 ? "Signup" : "OTP"}</span>
          </h2>

          <form onSubmit={step === 1 ? handleFormSubmit : handleVerifyOTP}>
            {step === 1 ? (
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4">
                <input
                  type="text"
                  name="phoneOrEmail"
                  placeholder="Enter Mobile Number or Email"
                  required
                  className="w-full py-2 px-2 outline-none text-gray-700"
                />
              </div>
            ) : (
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4">
                <input
                  type="text"
                  name="otp"
                  value={otp || ""} // ensure it's always a string
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  required
                  className="w-full py-2 px-2 outline-none text-gray-700"
                />
              </div>
            )}

            <p className="text-sm text-gray-600 mb-4">
              By continuing, I agree to the{" "}
              <span className="text-pink-600 font-semibold cursor-pointer">Terms of Use</span> &{" "}
              <span className="text-pink-600 font-semibold cursor-pointer">Privacy Policy</span>
            </p>

            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white w-full py-2 font-bold rounded"
            >
              {step === 1 ? "CONTINUE" : "VERIFY OTP"}
            </button>
          </form>

          {message && (
            <p className="text-sm text-center mt-4 text-red-500 font-medium">{message}</p>
          )}

          <p className="text-sm text-center mt-4 text-gray-600">
            Have trouble logging in?{" "}
            <a href="#" className="text-pink-600 font-semibold">
              Get help
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
