"use client"
import React, { useState } from 'react'

export default function Filter({ Search, setSearch,changeStatus ,destory }) {
  const [filterOpen, setFilterOpen] = useState(false);


  const filter = () => {
    setFilterOpen(!filterOpen);
  };



  return (
    <>
      <div
        className={`${filterOpen ? "block" : "hidden"
          } w-full px-2.5 py-2 bg-background`}
      >

        <div className="flex justify-between items-center">

          <div className="text-foreground">Filter</div>

          <div className="">

            <input
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-between items-center px-2.5 my-3">
        <div className="">View Color</div>
        <div className="flex justify-evenly gap-10">
          <button onClick={filter} className="bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded-2xl">
            Filter
          </button>
          <button onClick={changeStatus} className="bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded">
            Change Status
          </button>

          <button onClick={destory} className="bg-red-500 hover:bg-green-700 text-white px-4 py-1 rounded">
            Delete
          </button>


          <button className="bg-blue-500 rounded-3xl px-4 hover:bg-blue-700">
            {/* <Pencil /> */}
            ✏️
          </button>
        </div>
      </div>
    </>
  )
}
