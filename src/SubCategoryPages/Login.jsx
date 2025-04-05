// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [phoneOrEmail, setPhoneOrEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1); // 1: enter phone/email, 2: enter OTP
//   const [message, setMessage] = useState("");

//   const handleSendOTP = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/api/send-otp", {
//         phoneOrEmail,
//       });
//       setMessage(res.data.message);
//       setStep(2);
//     } catch (error) {
//       setMessage(error.response?.data?.error || "Something went wrong");
//     }
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/api/verify-otp", {
//         phoneOrEmail,
//         otp,
//       });
//       setMessage(res.data.message);
//       navigate("/userDashboard"); // Redirect to success page after OTP verification
//     } catch (error) {
//       setMessage(error.response?.data?.error || "Invalid OTP");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center px-4">
//       <div className="w-full max-w-md">
//         <div className="bg-pink-100 p-4 rounded-t-lg flex items-center justify-between">
//           {/* Offer Content */}
//         </div>

//         <div className="bg-white shadow-md p-6 rounded-b-lg">
//           <h2 className="text-xl font-semibold mb-4">
//             {step === 1 ? "Login or Signup" : "Enter OTP"}
//           </h2>

//           {step === 1 ? (
//             <form onSubmit={handleSendOTP}>
//               <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4">
//                 {/* <span className="px-3 text-gray-500 text-sm">+91</span> */}
//                 <input
//                   type="tel"
//                   placeholder="Mobile or Email"
//                   required
//                   value={phoneOrEmail}
//                   onChange={(e) => setPhoneOrEmail(e.target.value)}
//                   className="w-full py-2 px-2 outline-none text-gray-700"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-pink-500 hover:bg-pink-600 text-white w-full py-2 font-bold rounded"
//               >
//                 Send OTP
//               </button>
//             </form>
//           ) : (
//             <form onSubmit={handleVerifyOTP}>
//               <input
//                 type="text"
//                 placeholder="Enter OTP"
//                 required
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 className="w-full border border-gray-300 px-4 py-2 mb-4 rounded"
//               />
//               <button
//                 type="submit"
//                 className="bg-green-500 hover:bg-green-600 text-white w-full py-2 font-bold rounded"
//               >
//                 Verify OTP
//               </button>
//             </form>
//           )}

//           {message && (
//             <p className="text-sm mt-4 text-center text-gray-700">{message}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;











import React, { useState } from "react";

const Login = () => {
    const [phone, setphone] = useState({})
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        setphone(data);        
        e.target.reset();
    }

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
            <span className="text-gray-800">Login</span> or{" "}
            <span className="text-gray-900 font-bold">Signup</span>
          </h2>

          <form onSubmit={handleFormSubmit}>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4">
              {/* <span className="px-3 text-gray-500 text-sm">+91</span> */}
              <input
                type="string"
                name="phoneOrEmail"
                // pattern="[0-9]{10}"
                placeholder="Enter Mobile Number or Email"
                required
                className="w-full py-2 px-2 outline-none text-gray-700"
              />
            </div>

            <p className="text-sm text-gray-600 mb-4">
              By continuing, I agree to the{" "}
              <span className="text-pink-600 font-semibold cursor-pointer">
                Terms of Use
              </span>{" "}
              &{" "}
              <span className="text-pink-600 font-semibold cursor-pointer">
                Privacy Policy
              </span>
            </p>

            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white w-full py-2 font-bold rounded"
            >
              CONTINUE
            </button>
          </form>

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
