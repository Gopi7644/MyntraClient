import React from "react";

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">🎉 Welcome!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Your veryfied using OTP. Now you can explore our amazing features and products.
          <br />
        </p>
        <button
          onClick={() => alert("यहाँ से आगे की functionality जोड़ सकते हैं।")}
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold"
        >
          Explore Dashboard
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
