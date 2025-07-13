"use client";
import { useState } from "react";
import React from 'react'

export default function page() {
  const [image, setImage] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [order, setOrder] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // yaha API call ya logic likhna hai
    console.log({ image, categoryName, order });
  };
  return (
    <div>
      <div>
        <div className="max-w-5xl mx-auto mt-[100px] p-6 bg-white rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-6">Add Sub Sub Category</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Upload Box */}
            <div>
              <label className="block text-sm font-medium mb-2">Choose Image</label>
              <label className="flex items-center justify-center h-48 w-full border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-gray-500">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <span>Drag and drop</span>
              </label>
            </div>

            {/* Right Side Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Sub Sub Category Name</label>
                <input
                  type="text"
                  placeholder="Category Name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1"> Sub Category Name</label>
                <input
                  type="text"
                  placeholder="Category Name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
                />
              </div>

                <div>
                <label className="block text-sm font-medium mb-1">  Category Name</label>
                <input
                  type="text"
                  placeholder="Category Name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Order</label>
                <input
                  type="number"
                  placeholder="Order"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
                />
              </div>
            </div>

            {/* Submit Button (Full Width) */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition"
              >
                Add Sub Sub Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
