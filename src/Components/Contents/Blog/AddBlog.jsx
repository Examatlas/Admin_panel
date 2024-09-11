import React, { useState } from 'react';
import DashboardLayoutBasic from '../../DashboardLayoutBasic';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';

import BlogFormvalidationSchema from './BlogFormValidation';


const AddBlog = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],       
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
      
        [{ 'header': 1 }, { 'header': 2 },{ 'header': 3 }],               
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      
        [{ 'indent': '-1'}, { 'indent': '+1' }],        
        [{ 'direction': 'rtl' }],                         
      
        [{ 'size': ['small', false, 'large', 'huge'] }], 
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],       
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         
      ];

    const modules = {
        toolbar:true,
        toolbar: toolbarOptions,
        
    
        // {
        //     container: [
        //         // [{ 'font': Font.whitelist }],
        //         // [{ 'size': Size.whitelist }],
        //         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        //         ['bold', 'italic', 'underline', 'strike'],
        //         [{ 'color': [] }, { 'background': [] }],
        //         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        //         [{ 'align': [] }],
        //         ['link', 'image', 'video'],
        //         ['code-block'],
        //         ['clean'], // Remove formatting
        //         [{ 'indent': '-1' }, { 'indent': '+1' }], // Indent
        //     ],
        //     handlers: {
        //         // image: imageHandler, // Custom image handler
        //     },
        // },
        // clipboard: {
        //     matchVisual: false, // Match styles when pasting text
        // },
        // syntax: {
        //   highlight: text => hljs.highlightAuto(text).value, // Syntax highlighting
        // },
    };

    const formats = [
        'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike',
        'blockquote', 'list', 'bullet', 'link', 'image', 'video', 'code-block',
        'color', 'background', 'align', 'indent'
    ];

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
      const handleDescriptionChange = (value) => {
        formik.setFieldValue('content', value); 
      };

    const formik = useFormik({
        initialValues: {
          title: '',
          content:"",
          tags:"",
          image:null,
        },
        validationSchema:BlogFormvalidationSchema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
          
        },
      });
      

    return (
        <DashboardLayoutBasic>
            <div className='  min-h-[100vh]'>
                <div className='md:mx-10 my-10 rounded-md'>
                    <h1 className='text-4xl my-4'>Add Blog</h1>
                    <div>
                        <form onSubmit={formik?.handleSubmit} className='w-[90%] mx-auto'>
                            <div className='flex flex-col justify-start '>
                                <label htmlFor="title" className='text-start text-xl'>Title</label>
                                <input
                                    type="text"
                                    placeholder='Title'
                                    name='title'
                                    id="title"
                                    onChange={formik?.handleChange}
                                    value={formik.values.title}
                                    className='px-2 py-2 border border-gray-500 rounded-md my-1 outline-blue-400 text-lg'
                                />
                                
                                {formik?.errors?.title && <p className=' text-sm text-red-500 text-left'>{formik?.errors?.title}</p>}
                            </div>
                            <div className='flex flex-col justify-start my-4'>
                                {/* editor */}
                                <label htmlFor="content" className='text-start text-xl'>Content</label>
                                <ReactQuill
                                    id='content'
                                    name="content"
                                    theme="snow"
                                    value={formik.values.content}
                                    modules={modules}
                                    formats={formats}
                                    onChange={handleDescriptionChange}
                                    className='text-3xl h-[20rem] rounded-md'
                                />
                                <p className='mt-56 md:mt-24'></p>
                                {formik?.errors?.content && <p className=' text-sm text-red-500 text-left'>{formik?.errors?.content}</p>}
                            </div>

                            {/* <div className='mt-56 md:mt-24 mb-4 flex flex-col'> */}
                            <div className=' mb-4 flex flex-col'>
                                <label for="tags" className="text-start text-xl">Tags</label>
                                <select 
                                    id="tags"
                                    name='tags'
                                    onChange={formik.handleChange}
                                    value={formik.values.tags}
                                    className='px-3 cursor-pointer w-[40%] border-gray-500 py-3 rounded-md my-1 outline-blue-400 text-lg border'
                                >
                                    <option selected disabled>Choose a tag</option>
                                    <option value="SSC">SSC</option>
                                    <option value="SSC CGL">SSC CGL</option>
                                    <option value="BANK PO">BANK PO</option>
                                    <option value="SBI">SBI</option>
                                    <option value="SBI CLERK">SBI CLERK</option>
                                    <option value="CUET">CUET</option>
                                    <option value="CUET 2024">CUET 2024</option>
                                    <option value="CUET ADMIT CARD">CUET ADMIT CARD</option>
                                    <option value="JPSC">JPSC</option>
                                    <option value="JPSC SYLLABUS">JPSC SYLLABUS</option>
                                    <option value="JPSC 2024">JPSC 2024</option>
                                </select>
                                {formik?.errors?.tags && <p className=' text-sm text-red-500 text-left'>{formik?.errors?.tags}</p>}
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="image" className='text-start text-xl'>Upload Image</label>
                                <input type="file"
                                    name="image"
                                    id="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className='cursor-pointer w-full md:w-[40%] h-9 border-gray-500 rounded-md my-1 outline-blue-400 text-lg '
                                />
                                {formik?.errors?.image && <p className=' text-sm text-red-500 text-left'>{formik?.errors?.image}</p>}

                                <p className='text-red-500 text-xs text-start leading-3 my-2'>Width : 1200px and Height : 400px</p>
                                <div className='w-[99%] mx-auto md:mx-0 sm:w-[100%] lg:w-[600px] h-[300px] border border-gray-400'>
                                {
                                    imagePreview && 
                                    <img src={imagePreview} alt="Preview" className='w-[100%] h-[300px]'/>
                                }
                                </div>
                            </div>

                            <button type="submit" className='my-4 px-4 py-3 bg-blue-500 text-white rounded-md float-start text-lg hover:bg-blue-600'>Publish</button>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardLayoutBasic>

    );
}

export default AddBlog;
