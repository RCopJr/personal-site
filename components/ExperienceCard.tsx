import React from "react";

export default function Card() {
  return (
    <div className="mb-8 rounded-xl shadow-lg border border-slate-500 p-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-slate-200">
          Beautiful Card Title
        </h2>
        <p className="text-gray-600 mb-4">
          This is a description of the card. It gives some insight into the
          content and encourages users to engage.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Learn More
        </button>
      </div>
    </div>
  );
}
