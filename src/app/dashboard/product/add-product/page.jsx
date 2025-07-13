"use client";
import { useState } from "react";

export default function page() {
  const [form, setForm] = useState({
    name: "",
    parent: "",
    sub: "",
    subsub: "",
    material: "",
    color: "",
    type: "",
    bestSelling: "",
    topRated: "",
    upsell: "",
    actualPrice: "",
    salePrice: "",
  });

  const [images, setImages] = useState({
    product: null,
    back: null,
    gallery: null,
  });

  const [description, setDescription] = useState("");
  const [format, setFormat] = useState("");

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e, key) => {
    setImages({ ...images, [key]: e.target.files[0] });
  };

  const handleFormat = (type) => {
    document.execCommand(type, false, null);
    setFormat(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...form, ...images, description });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-7xl mx-auto bg-white p-6 rounded-md shadow space-y-6"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {["product", "back", "gallery"].map((type) => (
          <div key={type}>
            <label className="block text-sm font-medium capitalize mb-2">
              Choose {type} image
            </label>
            <label className="flex items-center justify-center h-36 border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-gray-500">
              <input
                type="file"
                onChange={(e) => handleImage(e, type)}
                className="hidden"
              />
              <span>Drag and drop</span>
            </label>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          ["Product Name", "name"],
          ["Select Parent Category", "parent"],
          ["Select Sub Category", "sub"],
          ["Select Sub Sub Category", "subsub"],
          ["Select Material", "material"],
          ["Select Color", "color"],
          ["Select Product Type", "type"],
          ["Is Best Selling", "bestSelling"],
          ["Is Top Rated", "topRated"],
          ["Is Upsell", "upsell"],
          ["Actual Price", "actualPrice"],
          ["Sale Price", "salePrice"],
        ].map(([label, name]) => (
          <div key={name}>
            <label className="block text-sm font-medium mb-1">{label}</label>
            {name.includes("Price") || name === "name" ? (
              <input
                name={name}
                type="text"
                onChange={handleInput}
                className="w-full border rounded-md p-2"
              />
            ) : (
              <select
                name={name}
                onChange={handleInput}
                className="w-full border rounded-md p-2"
              >
                <option>Nothing Selected</option>
              </select>
            )}
          </div>
        ))}
      </div>

      {/* Description Editor */}
      <div className="border rounded-md p-4">
        <label className="block mb-2 font-medium">Add Product Description</label>

        <div className="flex items-center gap-2 mb-2">
          <button
            type="button"
            onClick={() => handleFormat("bold")}
            className="border px-2 py-1 rounded text-sm"
          >
            <b>B</b>
          </button>
          <button
            type="button"
            onClick={() => handleFormat("italic")}
            className="border px-2 py-1 rounded text-sm italic"
          >
            I
          </button>
          <button
            type="button"
            onClick={() => handleFormat("underline")}
            className="border px-2 py-1 rounded text-sm underline"
          >
            U
          </button>
        </div>

        <div
          contentEditable
          onInput={(e) => setDescription(e.currentTarget.innerHTML)}
          className="min-h-[120px] border rounded-md p-3"
        ></div>

        <p className="text-xs mt-2 text-gray-500">
          Active formatting: {format || "No formatting applied"}
        </p>
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900"
      >
        Add Product
      </button>
    </form>
  );
}
