import React, { useState } from 'react';
import { createNewRoom } from '../../liveStreaming/Api';
import DashboardLayoutBasic from '../../DashboardLayoutBasic';
import axios from 'axios';
import config from '../../../config/config';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

//icons
import { RxCross2 } from "react-icons/rx";
import API_BASE_URL from '../../../config';
import { formats, modules } from '../../../config/ReactQuillConfig';
import ReactQuill from 'react-quill';

const CreateLiveClass = () => {
    // const [appData, setAppData] = useState({ meetingId: null, mode: null });
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

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


    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            teacher: '',
            keyword: '',
            tags: [],
            date_time: '',
            category: "",
            sub_category: "",
        },
        onSubmit: async (values) => {
            try {
                // const responce = await axios.post(`${config?.url}liveclass/createliveClass`, {
                const responce = await axios.post(`${API_BASE_URL}/api/liveclass/createliveClass`, {
                    // meetingId,
                    title: values?.title,
                    description: values?.description,
                    teacher: values?.teacher,
                    keyword: values?.keyword,
                    tags: values?.tags,
                    date_time: values?.date_time,
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
    })
    return (
        <>
            <DashboardLayoutBasic>
                <div className='shadow-md px-[3rem] py-4 rounded-md w-[100%] md:w-[80%] m-6'>
                    <h1 className='text-3xl mb-8 mt-4'>Create a Live Class</h1>
                    <form onSubmit={formik.handleSubmit}>

                        <div className='mb-4 flex flex-col'>
                            <label htmlFor="thumbnail" className='text-start text-xl'>Thumbnail</label>
                            <input type="file" 
                            name="thumbnail" 
                            id="thumbnail"
                            className='px-2 py-2 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'
                            />
                        </div>

                        <div className='mb-4 flex flex-col'>
                            <label htmlFor="category" className='text-start text-xl'>Category</label>
                            <select name="category"
                                id="category"
                                onChange={formik?.handleChange}
                                value={formik?.values?.category}
                                className='px-2 py-2 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'>
                                <option value="UPSC">UPSC</option>
                                <option value="JPSC">JPSC</option>
                                <option value="BPSC">BPSC</option>
                                <option value="UPPSC">UPPSC</option>
                            </select>
                        </div>

                        <div className='mb-4 flex flex-col'>
                            <label htmlFor="sub_category" className='text-start text-xl'>Sub Category</label>
                            <select name="sub_category"
                            id="sub_category"
                            onChange={formik?.handleChange}
                            value={formik?.values?.sub_category}
                            className='px-2 py-2 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'>
                                <option value="UPSC">UPSC</option>
                                <option value="JPSC">JPSC</option>
                                <option value="BPSC">BPSC</option>
                                <option value="UPPSC">UPPSC</option>
                            </select>
                        </div>

                        <div className='mb-4 flex flex-col'>
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
                        <div className='mb-4 flex flex-col'>
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
                        <div className='mb-4 flex flex-col'>
                            <label htmlFor="keyword" className='text-start text-xl'>Keyword</label>
                            <input
                                type="text"
                                id="keyword"
                                name='keyword'
                                onChange={formik.handleChange}
                                value={formik.values.keyword}
                                className='px-2 py-2 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'
                                placeholder="Enter title of class"
                            />
                        </div>

                        <div className='mb-4 flex flex-col'>
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
                        <div className='mb-4 flex flex-col'>
                            <label htmlFor="date_time" className='text-start text-xl'>Date & Time</label>
                            <input
                                type="datetime-local"
                                name='date_time'
                                placeholder='Date & Time'
                                value={formik?.date_time}
                                onChange={formik?.handleChange}
                                className='px-2 py-2 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'
                            />
                        </div>

                        <button type="submit" className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md'>Create Class</button>
                    </form>
                </div>
            </DashboardLayoutBasic>
        </>

    );
}

export default CreateLiveClass;
