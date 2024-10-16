import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";
import { toast } from "react-hot-toast"; // If you're using react-hot-toast for notifications
import api from "../../../Api/ApiConfig";
import Categorytable from "./Categorytable";

const SubCategory = () => {
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [subcategoryName, setSubcategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(false); 

  // const categories = ["Technology", "Science", "Health", "Education"];

  const fetchCategoty=async()=>{
    try {
      const res=await api.get(`/api/category/getCategory?per_page=10`);
      if(res?.status===200){
        setCategoryData(res?.data?.data);
      }
      console.log(res);
      
    } catch (error) {
      
    }
  };

  useEffect(()=>{
    fetchCategoty();
  },[])

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleSubcategoryNameChange = (e) => setSubcategoryName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start loading when the submission starts
    setLoading(true);

    const subCategoryData = {
      categoryId:category,
      subCategoryName: subcategoryName,
      description,
      tags,
    };

    try {
      const response = await api.post("api/category/createSubCategory", subCategoryData);
      
      // Handle successful response
      if (response.data.status) {
        toast.success("Subcategory created successfully!");
        setCategory("");
        setSubcategoryName("");
        setDescription("");
        setTags([]);
      } else {
        toast.error(response.data.message || "Failed to create subcategory");
      }
    } catch (error) {
      console.error("Error creating subcategory:", error);
      toast.error("Something went wrong, please try again later.");
    } finally {
      // Stop loading when the request completes
      setLoading(false);
    }
  };

  return (
    <DashboardLayoutBasic>
      <div className="flex ">
        <div className="w-full max-w-3xl p-6 items-center rounded-md">
          <h2 className="text-3xl font-bold mb-6 mr-[400px]">Add Sub Category</h2>
          <form onSubmit={handleSubmit}>
            {/* Category Dropdown */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2 mr-[600px] mt-7">Category</label>
              <select
                value={category}
                onChange={handleCategoryChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              >
                <option value="" disabled>Select a category</option>
                {categoryData?.map((cat, index) => (
                  <option key={index} value={cat?._id}>
                    {cat?.categoryName}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2 mr-[520px] mt-7">Subcategory Name</label>
              <input
                type="text"
                value={subcategoryName}
                onChange={handleSubcategoryNameChange}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Enter subcategory name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2 mr-[570px] mt-7">Description</label>
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Enter category description"
                required
              />
            </div>

            {/* Tags */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2 mr-[620px] mt-3">Tags</label>
              <div className="flex flex-wrap items-center mb-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-blue-600 text-white font-bold p-2 m-1 rounded-full"
                  >
                    <span className="mr-2">{tag}</span>
                    <button
                      type="button"
                      onClick={() => removeTag(index)}
                      className="text-red-400 hover:text-red-700 pl-2"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Enter a tag and press Enter"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 mt-3"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <div>
        <Categorytable/>
      </div>
    </DashboardLayoutBasic>
  );
};

export default SubCategory;
