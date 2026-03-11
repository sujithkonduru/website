import { useState } from "react";

export default function StrategyButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="px-8 py-3 border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-olive green-400 transition"
      >
        Schedule Strategy Call
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md mx-4">
            <h2 className="text-lg font-semibold mb-3 text-black">Contact Us</h2>
            <p className="mb-4 text-gray-700">
              Please contact us. We will guide you with the best marketing
              strategy and required information.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-black text-olive green-400 rounded-full hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}