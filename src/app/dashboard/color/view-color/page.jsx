'use client'
import Filter from '@/app/common/Filter';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function page() {
  const [activefilter, setactivefilter] = useState([]);
  const [Search, setSearch] = useState('')
  const [colors, setcolors] = useState([])
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [checkedValues, setcheckedValues] = useState([])
  const [refresh, setrefresh] = useState(true)

  const handlePageChange = (format) => {
    if (format === "next" && page < pagination.total_page) {
      setPage(page + 1);
    } else if (format === "previous" && page > 1) {
      setPage(page - 1);
    } else {
      console.log("Can't paginate further", { page, format });
    }
  };



  const changeStatus = async () => {
    if (checkedValues.length === 0) {
      return toast.error("Select at least one");
    }

    const res = await axios.put('http://localhost:8000/api/admin/color/change-status', {
      id: checkedValues
    });

    if (res.data._status) {
      toast.success("Status updated");
      setrefresh(!refresh)
    } else {
      toast.error("Failed to update");
    }
  };

  const destory = () => {
    if (checkedValues.length === 0) {
      return toast.error("Select at least one");
    }
    if (confirm('Are you sure you Want to Delete')) {
      axios.put('http://localhost:8000/api/admin/color/destroy', {
        id: checkedValues
      })
        .then(res => {
          console.log(res)
          if (res.data._status == true) {
            toast.success("Deleted Successfully");
            setrefresh(!refresh);
          } else {
            toast.error("Data not Deleted");
          }
        })
        .catch(error => {
          toast.error("Something went wrong");
          console.error(error);
        });
    }
  };




  useEffect(() => {
    axios.post('http://localhost:8000/api/admin/color/view', { name: Search, page })
      .then((result) => {
        if (result.data._status == true) {
          setcolors(result.data._data)
          console.log(result.data);

          setPagination({
            current_page: result.data.current_page,
            total_page: result.data.total_pages,
            total_records: result.data.total_records,
          });
        } else {
          setcolors([])
          toast.error(result.data._message)
        }
      })
      .catch(() => {
        toast.error('Something Went Wrong')
      })
  }, [Search, page, refresh])

  const getValue = (id) => {
    if (checkedValues.includes(id)) {
      var data = checkedValues.filter((v, i) => {
        if (v != id) {
          return v;
        }
      })
      console.log(data)
      setcheckedValues([...data])
    } else {
      var data = [...checkedValues, id]
      console.log(data)
      setcheckedValues(data)
    }

  }


  const getAllValues = () => {

    if (checkedValues.length == colors.length) {
      setcheckedValues([])
    } else {
      var data = [];
      colors.forEach((v) => {
        data.push(v._id)
      })
      setcheckedValues(data)
    }

    console.log(data)

  }


  return (
    <>
      <div>
        <div className="p-6">

          <Filter Search={Search} setSearch={setSearch} changeStatus={changeStatus} destory={destory} />

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-md">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3"><input onClick={getAllValues} checked={checkedValues.length == colors.length ? 'checked' : ''} type="checkbox" /></th>
                  <th className="p-3">Color Name</th>
                  <th className="p-3">Code</th>
                  <th className="p-3">Order</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>

                {colors.length > 0 ? (
                  colors.map((colors) => (
                    <tr key={colors.id} className="border-t">
                      <td className="p-3">
                        <input type="checkbox" onClick={() => getValue(colors._id)} checked={checkedValues.includes(colors._id) ? 'checked' : ''} />
                      </td>
                      <td className="p-3">{colors.name}</td>
                      <td className="p-3"><div
                        className="w-10 h-10 rounded-full"
                        // color style
                        style={{ backgroundColor: colors.code }}
                      ></div></td>
                      <td className="p-3">{colors.order}</td>
                      <td className="p-3">
                        <span className={`px-3 py-1 rounded text-white ${colors.status ? 'bg-green-500' : 'bg-red-500'}`}>
                          {colors.status ? 'Active' : 'Inactive'}
                        </span>
                      </td>

                      <td className="p-3">
                        <Link href={`/dashboard/color/update-color/${colors._id}`} className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                          ✏️
                        </Link>
                      </td>
                    </tr>
                  ))
                )


                  :

                  <tr className="border-t">
                    {/* <td className="p-3"><input type="checkbox" /></td>
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
                  </td> */}


                    <td>
                      <b>No record found</b>
                    </td>
                  </tr>


                }
                {/* <div className="">
                  <div className="prev">
                    <button>
                      "" prev
                    </button>
                  </div>
                  <div className="prev-page">
                    1
                  </div>
                  <div className="current-page">2</div>
                  <div className="next-page">3</div>
                  <div className="next">
                    <button>
                      next 
                    </button>
                  </div>
                </div> */}

                {/* {enquiries.map((enquiry) => (
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
              ))} */}
              </tbody>
            </table>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="cursor-pointer"
                    disabled={page <= 1}
                    onClick={() => handlePageChange("previous")}
                  />
                </PaginationItem>

                {/* Show previous page number if > 1 */}
                {pagination.current_page > 1 && (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => setPage(pagination.current_page - 1)}
                    >
                      {pagination.current_page - 1}
                    </PaginationLink>
                  </PaginationItem>
                )}

                {/* Current page */}
                <PaginationItem>
                  <PaginationLink isActive>{pagination.current_page}</PaginationLink>
                </PaginationItem>

                {pagination.current_page < pagination.total_page && (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => setPage(pagination.current_page + 1)}
                    >
                      {pagination.current_page + 1}
                    </PaginationLink>
                  </PaginationItem>
                )}

                {pagination.current_page + 1 < pagination.total_page && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationNext
                    className="cursor-pointer"
                    disabled={pagination.current_page >= pagination.total_page}
                    onClick={() => handlePageChange("next")}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </>

  )
}
