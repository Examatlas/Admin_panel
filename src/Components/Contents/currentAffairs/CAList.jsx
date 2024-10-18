import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import api from "../../../Api/ApiConfig";
import Pagination from "../../../utils/Pagination";
import useDebounce from "../../../utils/Debounce";

const CAList = ({searchTerm,setSearchTerm}) => {
    const [CurrentAffairData, setCurrentAffairData] = useState();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    const fetchResults = async (searchQuery) => {
        if (!searchQuery) {
            setCurrentAffairData([]);
            return;
        }
        try {
            const response = await api.get(`/api/currentAffair/getAllCA?per_page=10&page=${page}&search=${searchQuery}`);
            if (response?.statusText === "OK") {
                setCurrentAffairData(response?.data?.data);
                setTotalPages(response?.data?.pagination?.totalPages);
                setPage(response?.data?.pagination?.currentPage);
            }
        } catch (error) {
            console.error("Error fetching search results: ", error);
        }
    };

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };
    const fetchAllCurrentAffairs = async () => {
        try {
            const response = await api.get(`/api/currentAffair/getAllCA?page=${page}&per_page=10`);
            if (response?.status === 200) {
                setCurrentAffairData(response?.data?.data);
                setTotalPages(response?.data?.pagination?.totalPages);
                setPage(response?.data?.pagination?.currentPage);
            }

        } catch (error) {
            console.log("Error when fetching currentAffairs", error);
        }
    };
    useEffect(() => {
        fetchAllCurrentAffairs();
    }, []);

    useEffect(() => {
        if (searchTerm === '') {
            fetchAllCurrentAffairs();
        } else {
            fetchResults(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);


    //delete currentaffair
    const deleteCurrentAffair = async (currentAffairId) => {
        try {
            const response = await api.delete(`/api/currentAffair/deleteById/${currentAffairId}`);

            if (response?.data?.status === true) {
                toast.success(response?.data?.message, {
                    duration: 3000,
                    position: 'top-center',
                });
                fetchAllCurrentAffairs();
            }
        } catch (error) {
            toast.error(error?.message, {
                duration: 3000,
                position: 'top-center',
            });
            console.log("Error while delete a currentAffairs", error);
        }
    }

    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tags
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                            {/* <th scope="col" className="px-6 py-3">
                                Price
                            </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CurrentAffairData && CurrentAffairData?.map((item, index) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item?.title}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item?.tags?.length > 0 && item?.tags?.map((tag, index) => (
                                                <span key={index}>{tag}, </span>
                                            ))}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`/contents/current-affairs/${item?._id}`}>
                                                <button
                                                    className='px-2 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md mx-1'
                                                    title='Edit'>
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => { deleteCurrentAffair(item?._id) }}
                                                className='px-2 py-2 text-white bg-red-400 hover:bg-red-400 rounded-md mx-1'
                                                title='Delete'>
                                                <RiDeleteBin6Fill />
                                            </button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div>
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>

        </div>
    );
}

export default CAList;
