"use client";
import { useState } from "react";
import { FaTrash, FaEdit, FaFilter, FaPlus } from "react-icons/fa";

export default function page() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Frank",
      description: "Frank ok",
      shortDescription: "100",
      thumbnail: "https://vitejs.dev/logo-with-shadow.png",
      status: "Active",
    },
  ]);

  return (
    <div className="p-4 bg-white rounded-md shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Product List</h2>
        <div className="flex gap-2">
          <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 flex items-center gap-1">
            <FaFilter size={14} /> Filter
          </button>
          <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
            <FaPlus size={14} />
          </button>
        </div>
      </div>

      <table className="w-full text-left border-t">
        <thead className="bg-gray-50">
          <tr className="text-sm font-medium text-black">
            <th className="p-3">
              <input type="checkbox" />
            </th>
            <th className="p-3">Sr No</th>
            <th className="p-3">Product Name</th>
            <th className="p-3">Description</th>
            <th className="p-3">Short Description</th>
            <th className="p-3">Thumbnail</th>
            <th className="p-3">Action</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr key={item.id} className="border-t text-sm hover:bg-gray-50">
              <td className="p-3">
                <input type="checkbox" />
              </td>
              <td className="p-3">{i + 1}</td>
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.description}</td>
              <td className="p-3">{item.shortDescription}</td>
              <td className="p-3">
                <img src={item.thumbnail} alt="thumb" className="w-10 h-10" />
              </td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </div>
              </td>
              <td className="p-3">
                <div className="flex gap-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded text-xs">
                    {item.status}
                  </span>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                    View
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
