import * as React from 'react';

import img from '../../../Image/download.png';
import { Link } from 'react-router-dom';

export default function LiveCard({ data, deleteClass }) {
  return (
    <>

      <div className="relative overflow-x-auto w-full shadow-md ">
        <table className="w-full overflow-x-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='border border-black rounded-lg'>
              <th scope="col" className="border border-black w-[10px] text-center">
                S.No
              </th>
              <th scope="col" className="text-center font-bold py-3 border border-black">
                Name of Course
              </th>
              <th scope="col" className="text-center py-3 px-20 border border-black">
                Image
              </th>
              <th scope="col" className="text-center py-3 border border-black">
                Schedule
              </th>
              <th scope="col" className="text-center py-3 border border-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data && data?.map((item, index) => {
                return (
                  // <>
                  <tr className="bg-white border border-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                    <td className="border border-black px-3 text-lg font-bold">
                      {index + 1}.
                    </td>
                    <td className="border border-black text-center py-4 px-6 w-40 font-semibold text-gray-900 dark:text-white">
                      {item?.title}
                    </td>
                    <td className="border border-black p-2 w-[300px] ">
                      <img src={img} width={400} height={400} className="" alt="Thumbnail" />
                    </td>
                    <td className="border border-black text-center px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      <Link to={`/contents/liveclass/schedule/${item?._id}`} className="font-medium mx-1 px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white">Schedule</Link>
                    </td>
                    <td className="border border-black mx-auto px-6 py-4">
                      <div className='flex '>
                        <Link
                          to={`/contents/update-live-course/${item?._id}`}
                          className="font-medium mx-1 px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white"
                        >Edit
                        </Link>
                        <button
                          onClick={() => deleteClass(item?._id)}
                          className="font-medium mx-1 px-2 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white"
                        >Delete
                        </button>
                      </div>

                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}