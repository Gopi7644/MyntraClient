import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: enter phone/email, 2: enter OTP
  const [message, setMessage] = useState("");

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/send-otp", {
        phoneOrEmail,
      });
      setMessage(res.data.message);
      setStep(2);
    } catch (error) {
      setMessage(error.response?.data?.error || "Something went wrong");
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/verify-otp", {
        phoneOrEmail,
        otp,
      });
      setMessage(res.data.message);
      navigate("/userDashboard"); // Redirect to success page after OTP verification
    } catch (error) {
      setMessage(error.response?.data?.error || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-pink-100 p-4 rounded-t-lg flex items-center justify-between">
          {/* Offer Content */}
        </div>

        <div className="bg-white shadow-md p-6 rounded-b-lg">
          <h2 className="text-xl font-semibold mb-4">
            {step === 1 ? "Login or Signup" : "Enter OTP"}
          </h2>

          {step === 1 ? (
            <form onSubmit={handleSendOTP}>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4">
                {/* <span className="px-3 text-gray-500 text-sm">+91</span> */}
                <input
                  type="tel"
                  placeholder="Mobile or Email"
                  required
                  value={phoneOrEmail}
                  onChange={(e) => setPhoneOrEmail(e.target.value)}
                  className="w-full py-2 px-2 outline-none text-gray-700"
                />
              </div>
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white w-full py-2 font-bold rounded"
              >
                Send OTP
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP}>
              <input
                type="text"
                placeholder="Enter OTP"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 mb-4 rounded"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white w-full py-2 font-bold rounded"
              >
                Verify OTP
              </button>
            </form>
          )}

          {message && (
            <p className="text-sm mt-4 text-center text-gray-700">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
