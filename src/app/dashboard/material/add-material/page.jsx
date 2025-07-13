'use client'
import React from 'react'
import { useState } from "react";

export default function page() {
  const [colorName, setColorName] = useState("");
  const [colorCode, setColorCode] = useState("#000000");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit logic yahan daalo
    console.log({ colorName, colorCode, order });
  };
  return (
    <div>
      <div className="max-w-3xl ml-[50px] mt-10 p-6 bg-white rounded-2xl shadow border">
        <h2 className="text-xl font-semibold mb-6">Add Material</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium mb-1">Material Name</label>
            <input
              type="text"
              placeholder="Enter color name"
              value={colorName}
              onChange={(e) => setColorName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* <div>
            <label className="block font-medium mb-1">Color Picker</label>
            <input
              type="color"
              value={colorCode}
              onChange={(e) => setColorCode(e.target.value)}
              className="w-16 h-10 border rounded"
            />
          </div> */}

          <div>
            <label className="block font-medium mb-1">Order</label>
            <input
              type="text"
              placeholder="Enter order"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Add Material
          </button>
        </form>
      </div>
    </div>
  )
}
