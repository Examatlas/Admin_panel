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


    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            teacher:'',
            keyword:'',
            tags:[],
        },
        onSubmit: async (values) => {
            try {
                // const responce = await axios.post(`${config?.url}liveclass/createliveClass`, {
                const responce = await axios.post(`${API_BASE_URL}/api/liveclass/createMeeting`, {
                    // meetingId,
                    title: values?.title,
                    description: values?.description,
                    teacher: values?.teacher,
                    keyword: values?.keyword,
                    tags:values?.tags,
                });
                console?.log(responce);
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
                            <label htmlFor="teacher" className='text-start text-xl'>Category</label>
                            {/* <input
                                type="text"
                                id="teacher"
                                name='teacher'
                                onChange={formik.handleChange}
                                value={formik.values.teacher}
                                className='px-2 py-2 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'
                                placeholder="Enter title of class"
                            /> */}
                            <select name="category" id="category" className='px-2 py-2 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'>
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
                        <div className='mb-4 flex flex-col'>
                            <label htmlFor="description" className='text-start text-xl'>Description</label>
                            <input
                                type="text"
                                id="description"
                                name='description'
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                className='px-2 py-2 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'
                                placeholder="Enter title of class"
                            />
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
                                            <RxCross2 onClick={() => handleRemoveTag(index)} className=' cursor-pointer'/>
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

                        <button type="submit" className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md'>Create Class</button>
                    </form>
                </div>
            </DashboardLayoutBasic>
        </>

    );
}

export default CreateLiveClass;
