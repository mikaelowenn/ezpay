"use client"
import React from "react";

interface PaymentProps{
    id: string;
}

export default function SuccessPage({id}: PaymentProps) {
  
    const shortenString = id.length > 20 ? `${id.slice(0, 10)}.....${id.slice(-10)}` : id;

    return (
    <div className="flex flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold text-indigo-700 mb-3">Payment successful!</h1>
      <p className="text-lg text-gray-600 mb-5">You have successfully transferred!</p>
      
      <div className="bg-gray-100 rounded-lg p-5 w-full max-w-md mb-5">
        <div className="flex justify-between mb-3">
          <span className="text-gray-600">Token</span>
          <span className="font-medium">USDC</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-600">Your Wallet</span>
          <span className="text-xs">0x897083eaaeae3abd21a6826bd30c2b79c882412f</span>
        </div>
        <div className="flex justify-between mb-3 items-center">
          <span className="text-gray-600">Payment ID</span>
          <span className="text-xs">{shortenString}</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-gray-600">Payment Date</span>
          <span className="font-medium">22/09/2024</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-gray-600">Transaction ID</span>
          <span className="font-medium">8347923743972309762</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Amount</span>
          <span className="text-2xl font-bold text-red-500">1 USDC</span>
        </div>
      </div>

      <button 
        className="bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg cursor-pointer hover:bg-indigo-800"
        onClick={() => window.location.href = "/homepage"}>
        Back Home
      </button>
    </div>
  );
};

// TransactionPage.js would be identical, just change the title to "Transaction successful!"