import React, { useEffect, useState } from "react";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";
import { toast } from "react-hot-toast";
import api from "../../../Api/ApiConfig";
import SubCategoryTable from "./SubCategoryTable";
import Pagination from "../../../utils/Pagination";
import AddSubCategoryModal from "./AddSubCategoryModal";

const SubCategory = () => {
  
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [page, setpage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const fetchCategoty = async () => {
    try {
      const res = await api.get(`/api/category/getCategory?per_page=10`);
      if (res?.status === 200) {
        setCategoryData(res?.data?.data);
      }
    } catch (error) {
      console.log("Error while fetching category");
    }
  };
  const fetchSubCategoty = async () => {
    try {
      const res = await api.get(
        `/api/category/getSubCategory?page=${page}&per_page=10`
      );
      if (res?.status === 200) {
        setSubCategoryData(res?.data?.data);
        setpage(res?.data?.pagination?.currentPage);
        setTotalPages(res?.data?.pagination?.totalPages);
      }
    } catch (error) {
      console.log("Error while fetching category");
    }
  };

  useEffect(() => {
    fetchCategoty();
    fetchSubCategoty();
  }, [page]);
 
  // Pagination content
  const handlePageChange = (pageNumber) => {
    setpage(pageNumber);
  };

  const deleteSubCategory = async (id) => {
    try {
      const res = await api.delete(`api/category/deleteSubCategory/${id}`);
      if (res?.status === 200) {
        toast.success(res?.data?.message);
        setTimeout(() => {
          fetchSubCategoty();
        }, 2000);
      }
    } catch (error) {
      console.log(`Error occured when deleting subcategory`, error);
    }
  };

  return (
    <DashboardLayoutBasic>
      <div className="flex w-full justify-end px-10">
        <AddSubCategoryModal categoryData={categoryData} fetchSubCategoty={fetchSubCategoty}/>
      </div>
      <div className="w-full px-[2rem] md:px-[5rem]">
        <SubCategoryTable
          subCategoryData={subCategoryData}
          setSubCategoryData={setSubCategoryData}
          fetchSubCategoty={fetchSubCategoty}
          deleteSubCategory={deleteSubCategory}
          categoryData={categoryData}
        />
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    </DashboardLayoutBasic>
  );
};

export default SubCategory;
