
import React, { useEffect, useState } from 'react';
import DashboardLayoutBasic from '../../DashboardLayoutBasic';
import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useAsyncError, useNavigate, useParams } from 'react-router-dom';

//icons
import { RxCross2 } from "react-icons/rx";
import API_BASE_URL from '../../../config';
import { formats, modules } from '../../../config/ReactQuillConfig';
import ReactQuill from 'react-quill';
import api from '../../../Api/ApiConfig';
const EditLiveCourse = () => {
    const [inputValue, setInputValue] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [courseData,setCourseData]=useState();
    const navigate = useNavigate();
    const {courseId}=useParams();

    const getCourseById=async()=>{
        try {
            const res=await api.get(`/api/liveclass/getLiveCourseById/${courseId}`);
            if(res?.status===200){
                setCourseData(res?.data?.course);
            }
        } catch (error) {
            console.log("error while fetching course :",error);
        }
    };
    useEffect(()=>{
        getCourseById();
    },[])

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            formik.setFieldValue('tags', [
                ...formik.values.tags,
                inputValue
            ]);
            setInputValue('');
            event.preventDefault();
        }
    };

    const handleRemoveTag = (index) => {
        const newTags = formik.values.tags.filter((_, i) => i !== index);
        formik.setFieldValue('tags', newTags);
    };
    const handleDescriptionChange = (value) => {
        formik.setFieldValue('description', value);
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            formik.setFieldValue('image', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const formik = useFormik({
        initialValues: {
            title: courseData?.title,
            description: courseData?.description,
            teacher: courseData?.teacher,
            tags:courseData?.tags|| [],
            category: courseData?.category,
            sub_category: courseData?.sub_category,
        },
        enableReinitialize: true,
        onSubmit: async (values) => {
            try {
                // const responce = await axios.put(`${API_BASE_URL}/api/liveclass/updateLiveCourse/${courseId}`, {
                const responce = await api.put(`/api/liveclass/updateLiveCourse/${courseId}`, {
                    title: values?.title,
                    description: values?.description,
                    teacher: values?.teacher,
                    tags: values?.tags,
                    category: values?.category,
                    sub_category: values?.sub_category,
                });

                if (responce?.data?.status === true) {
                    toast.success(responce?.data?.message);
                    setTimeout(() => {
                        navigate("/contents/liveClasses");
                    }, 2000);
                }
            } catch (error) {
                toast.error(error?.message);
                console.log("Error while creating a class", error);
            }

        }
    });

  return (
    <div>
       <>
            <DashboardLayoutBasic>
                <div className='shadow-md px-[3rem] py-8 rounded-md w-[100%] md:w-[90%] m-6'>
                    <h1 className='text-start text-4xl font-bold mb-8 mt-4 '>Update a Live Course</h1>
                    <form onSubmit={formik.handleSubmit}>

                        <div className='flex flex-col md:flex-row gap-10 justify-center'>
                            <div className='mb-4 flex flex-col md:w-1/2'>
                                <label htmlFor="category" className='text-start text-xl'>Category</label>
                                <select name="category"
                                    id="category"
                                    onChange={formik?.handleChange}
                                    value={formik?.values?.category}
                                    className='px-2 py-3 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'>
                                    <option value="UPSC">UPSC</option>
                                    <option value="JPSC">JPSC</option>
                                    <option value="BPSC">BPSC</option>
                                    <option value="UPPSC">UPPSC</option>
                                </select>
                            </div>

                            <div className='mb-4 flex flex-col md:w-1/2'>
                                <label htmlFor="sub_category" className='text-start text-xl'>Sub Category</label>
                                <select name="sub_category"
                                    id="sub_category"
                                    onChange={formik?.handleChange}
                                    value={formik?.values?.sub_category}
                                    className='px-2 py-3 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'>
                                    <option value="UPSC">UPSC</option>
                                    <option value="JPSC">JPSC</option>
                                    <option value="BPSC">BPSC</option>
                                    <option value="UPPSC">UPPSC</option>
                                </select>
                            </div>
                        </div>


                        <div className='flex flex-col md:flex-row gap-10 justify-center'>
                            <div className='mb-4 flex flex-col md:w-1/2'>
                                <label htmlFor="title" className='text-start text-xl'>Class Name</label>
                                <input
                                    type="text"
                                    id="title"
                                    name='title'
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                    className='px-2 py-2 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'
                                    placeholder="Enter title of class"
                                />
                            </div>
                            <div className='mb-4 flex flex-col md:w-1/2'>
                                <label htmlFor="teacher" className='text-start text-xl'>Teacher's Name</label>
                                <input
                                    type="text"
                                    id="teacher"
                                    name='teacher'
                                    onChange={formik.handleChange}
                                    value={formik.values.teacher}
                                    className='px-2 py-2 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'
                                    placeholder="Enter title of class"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-10 '>

                            <div className='mb-4 flex flex-col md:w-1/2'>
                                {/* display tags */}
                                <div className='flex gap-2'>
                                    {formik?.values?.tags?.map((tag, index) => (
                                        <div key={index} style={{ marginBottom: '8px' }}
                                            className='bg-gray-300 flex justify-center items-center rounded-full w-fit px-5 py-1 gap-2'>
                                            <strong >{tag}</strong>
                                            <RxCross2 onClick={() => handleRemoveTag(index)} className=' cursor-pointer' />
                                        </div>
                                    ))}
                                </div>
                                <label htmlFor="tags" className='text-start text-xl'>Tags</label>
                                <input
                                    type="text"
                                    id='tags'
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    className='px-2 py-2 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'
                                    placeholder="Enter a tag and press Enter"
                                />
                                {/* {formik?.errors?.tags && <p className='text-sm text-red-500 text-left'>{formik?.errors?.tags}</p>} */}
                            </div>
                        </div>

                        <div className='flex flex-col justify-start my-4'>
                            <label htmlFor="description" className='text-start text-xl'>Description</label>
                            <ReactQuill
                                id='description'
                                name="description"
                                theme="snow"
                                value={formik.values.description}
                                modules={modules}
                                formats={formats}
                                onChange={handleDescriptionChange}
                                className='text-3xl h-[20rem] rounded-md'
                            />
                            <p className='mt-56 md:mt-24'></p>
                            {/* {formik?.errors?.content && <p className=' text-sm text-red-500 text-left'>{formik?.errors?.content}</p>} */}
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="thumbnail" className='text-start text-xl'>Upload Image</label>
                            <input type="file"
                                name="thumbnail"
                                id="thumbnail"
                                accept="image/*"
                                onChange={handleImageChange}
                                className='cursor-pointer w-full md:w-[40%] h-9 border-gray-500 rounded-md my-1 outline-blue-400 text-lg '
                            />
                            {/* {formik?.errors?.image && <p className=' text-sm text-red-500 text-left'>{formik?.errors?.thumbnail}</p>} */}

                            <p className='text-red-500 text-xs text-start leading-3 my-2'>Width : 1200px and Height : 400px</p>
                            <div className='w-[99%] mx-auto md:mx-0 sm:w-[100%] lg:w-[600px] h-[300px] border border-gray-400'>
                                {
                                    imagePreview &&
                                    <img src={imagePreview} alt="Preview" className='w-[100%] h-[300px]' />
                                }
                            </div>
                        </div>

                        <button
                            type="submit"
                            className='px-5 py-3 mt-10 mb-4 text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-md'
                        >
                            Update Course
                        </button>
                    </form>
                </div>
            </DashboardLayoutBasic>
        </>
    </div>
  );
}

export default EditLiveCourse;
