'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function page() {
    const [colorName, setColorName] = useState("");
    const [colorCode, setColorCode] = useState("#000000");
    const [order, setOrder] = useState("");


    const params = useParams();
    const updateId = params.id;
    const navigate = useRouter()



    useEffect(() => {
        axios.post(`http://localhost:8000/api/admin/color/details/${updateId}`)
            .then((result) => {
                if (result.data._status == true) {
                    setColorName(result.data._data.name)
                    setColorCode(result.data._data.code)
                    setOrder(result.data._data.order)
                } else {
                    toast.error(result.data._message);

                    for (var value of result.data._data) {
                        toast.error(value)
                    }
                }
            })
            .catch(() => {
                toast.error('Something went Wrong')

                // for(var value of result.data. )
            })
    }, [updateId])


    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            code: e.target.code.value,
            order: e.target.order.value
        }

        // // if (!updateId) {
        // //     axios.post(`http://localhost:8000/api/admin/color/update`, data)
        // //         .then((result) => {
        // //             if (result.data._status == true) {
        // //                 toast.success(result.data._message)
        // //                 navigate('/color/view')
        // //             } else {
        // //                 toast.error(result.data._message);

        // //                 for (var value of result.data._data) {
        // //                     toast.error(value)
        // //                 }
        // //             }
        // //         })
        // //         .catch(() => {
        // //             toast.error('Something went Wrong')

        // //             // for(var value of result.data. )
        // //         })
        // } else {

        // }

        axios.put(`http://localhost:8000/api/admin/color/update/${updateId}`, data)
            .then((result) => {
                if (result.data._status == true) {
                    toast.success(result.data._message)
                    setTimeout(() => {
                        navigate.push('/dashboard/color/view-color')
                    }, 2000);
                } else {
                    toast.error(result.data._message);

                    for (var value of result.data._data) {
                        toast.error(value)
                    }
                }
            })
            .catch(() => {
                toast.error('Something went Wrong')

                // for(var value of result.data. )
            })



        console.log({ colorName, colorCode, order });
    };
    return (
        <div>
            <div className="max-w-3xl ml-[50px] mt-10 p-6 bg-white rounded-2xl shadow border">
                <h2 className="text-xl font-semibold mb-6">
                    {updateId ? "Update color" : "Add Color"}
                </h2>

                <form onSubmit={handleSubmit} autoComplete='off' className="space-y-5">
                    <div>
                        <label className="block font-medium mb-1">Color Name</label>
                        <input
                            type="text"
                            placeholder="Enter color name"
                            // value={colorName}
                            name='name'
                            defaultValue={colorName}
                            onChange={(e) => setColorName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Color Picker</label>
                        <input
                            type="color"
                            // value={colorCode}
                            name='code'
                            onChange={(e) => setColorCode(e.target.value)}
                            className="w-16 h-10 border rounded"
                            defaultValue={colorCode}
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Order</label>
                        <input
                            type="text"
                            placeholder="Enter order"
                            // value={order}
                            name='order'
                            defaultValue={order}
                            onChange={(e) => setOrder(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                    >
                        {updateId ? "Update Color" : "Add Color"}
                    </button>
                </form>
            </div>
        </div>
    )
}
