"use client"
import React, { useState } from 'react'
import Header from '../common/Header'
import Sidebar from '../common/Sidebar'

export default function layout({children}) {

    const [sidebar , setSidebar] = useState(true)

  return (
    <div>
      <Header sidebar={sidebar} setSidebar={setSidebar} />

      <div className={`grid duration-1000  ${sidebar ? ("grid-cols-[20%_auto] ") : ("grid-cols-[0%_auto] ")}`}>
        <div className="sidebsar shadow overflow-hidden overflow-y-scroll h-[92vh]">
            <Sidebar/>
        </div>
        <div className="content">
            {children}
        </div>
      </div>
    </div>
  )
}
