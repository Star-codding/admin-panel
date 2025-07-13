import React from 'react'

export default function page() {
    const enquiries = [
    {
      id: 1,
      userName: "Red",
      email: "Lorem Ipsum dolor sit",
      subject: "1",
      message: "Active"
    }
  ];
  return (
     <div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">View Why Choose Us</h1>
          <div className="flex gap-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Filter
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
              ✏️
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-md">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3"><input type="checkbox" /></th>
                <th className="p-3">Title</th>
                <th className="p-3">Description</th>
                <th className="p-3">Order</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id} className="border-t">
                  <td className="p-3"><input type="checkbox" /></td>
                  <td className="p-3">{enquiry.userName}</td>
                  <td className="p-3">{enquiry.email}</td>
                  <td className="p-3">{enquiry.subject}</td>
                  <td className="p-3">
                    <span className="bg-green-500 text-white px-3 py-1 rounded">
                      {enquiry.message}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                      ✏️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
