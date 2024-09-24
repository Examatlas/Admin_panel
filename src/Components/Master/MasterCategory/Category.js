import React, { useState } from "react";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";
import axios from "axios"; // Import Axios
import { toast } from "react-hot-toast"; // Optionally use react-hot-toast for notifications

const Category = () => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(false); // For loading state

  const handleCategoryChange = (e) => setCategoryName(e.target.value);
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
    setLoading(true); // Set loading to true when API call starts
    try {
      // Prepare the payload for the API request
      const payload = {
        category: categoryName,
        description,
        tags,
      };

      // Make the POST request to the API
      const response = await axios.post("http://localhost:5000/api/category/createcategory", payload);

      // Handle success response
      if (response.data.status) {
        toast.success("Category created successfully!"); // Show success notification
        setCategoryName("");
        setDescription("");
        setTags([]);
      } else {
        toast.error(response.data.message); // Show error message from API
      }
    } catch (error) {
      console.error("Error creating category:", error);
      toast.error("Failed to create category. Please try again later."); // Show generic error message
    } finally {
      setLoading(false); // Set loading to false after API call is done
    }
  };

  return (
    <DashboardLayoutBasic>
      <div className="fixed flex ">
        <div className="w-full max-w-3xl p-6 items-center rounded-md">
          <h2 className="text-3xl font-bold mb-6 mr-[400px]">Add Category</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2 mr-[500px] mt-10">Category Name</label>
              <input
                type="text"
                value={categoryName}
                onChange={handleCategoryChange}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Enter category name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2 mr-[520px] mt-7">Description</label>
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Enter category description"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2 mr-[570px] mt-5">Tags</label>
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
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 mt-7"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Submitting..." : "Submit"} {/* Change button text during submission */}
            </button>
          </form>
        </div>
      </div>
    </DashboardLayoutBasic>
  );
};

export default Category;
