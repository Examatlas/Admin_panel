import React, { useState } from "react";
import DashboardLayoutBasic from "../../DashboardLayoutBasic";

const Category = () => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ categoryName, description, tags });
    // Handle API submission here
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
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 mt-7 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </DashboardLayoutBasic>
  );
};

export default Category;
