// components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-60 flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black"></div>
    </div>
  );
}
