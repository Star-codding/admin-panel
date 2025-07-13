"use client"
import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Sidebar from '../common/Sidebar'
import { ClipLoader } from 'react-spinners'; // import spinner


export default function layout({ children }) {

  const [sidebar, setSidebar] = useState(true)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading for 700ms
    const timeout = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex">
        <Sidebar />
        <main className="flex-grow flex justify-center items-center h-screen">
          <ClipLoader size={50} color="#123abc" loading={loading} />
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header sidebar={sidebar} setSidebar={setSidebar} />

      <div className={`grid duration-1000  ${sidebar ? ("grid-cols-[20%_auto] ") : ("grid-cols-[0%_auto] ")}`}>
        <div className="sidebsar shadow overflow-hidden overflow-y-scroll h-[92vh] bg-gray-50">
          <Sidebar />
        </div>
        <div className="content h-[92vh] overflow-y-scroll overflow-hidden p-4 ">
          {children}
        </div>
      </div>
    </div>
  )
}
