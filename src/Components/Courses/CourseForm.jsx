// import React, { useState } from 'react';
// import DashboardLayoutBasic from "../DashboardLayoutBasic";
// import { useFormik } from 'formik';
// import CourseFormvalidation from './CourseformValidation';
// import API_BASE_URL from '../../config';
// import toast from 'react-hot-toast';
// import axios from 'axios';


// const CourseForm = () => {
//   const [encryption, setEncryption] = useState('noEncryption');
//   const [imagePreview, setImagePreview] = useState(null);

//   const formik = useFormik({
//     initialValues: {
//       title: '',
//       price: '',
//       image: null
//     },
//     validationSchema: CourseFormvalidation,
//   //   onSubmit: (values) => {
//   //     console.log('Form values:', values);
//   //     console.log('Content Security:', encryption === 'encryption' ? 'Encrypted' : 'Not Encrypted');
//   //   },
//   // });

//   onSubmit: async(values) =>{
//     try{
//       const res = await axios.post(`${API_BASE_URL}/api/course/createCourse`,{
//         title:values?.title,
//         price:values?.price,
//         security:values?.security
//       })
//       if(res?.data?.status===true){
//         toast.success(res?.data?.message);
//         setTimeout(()=>{
//           Navigate("/contents/courses");
//         },3000);
//       }
//     }catch(error){
//       toast.error(error?.message);
//       console.log(error?.message)
//       console.log("Error occured during course submit",error);
//     }
//   }

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       formik.setFieldValue('image', file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
  

//   return (
//     <DashboardLayoutBasic>
//       <div className="flex mr-[40rem]">
//         <div className="bg-white p-6 rounded-lg w-[40rem]">
//           <h1 className="text-3xl font-semibold mb-1 mr-[20rem]">Create Course</h1>
//           <p className="text-gray-600  mr-[20rem] font-light">Start creating a new course</p>
//           <form onSubmit={formik.handleSubmit}>
//             {/* Title Input */}
//             <div>
//               <div className="flex">
//                 <label className="block text-gray-700 mb-2 ml-10 mt-7 font-semibold">Title
//                   <span className='text-red-500'>*</span>
//                 </label>
//                 <p className="text-gray-500 text-sm mt-7 ml-[510px]">{formik.values.title.length}/60</p>
//               </div>
//               <input
//                 type="text"
//                 name="title"
//                 maxLength="60"
//                 placeholder="Enter course title"
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-10"
//                 onChange={formik.handleChange}
//                 value={formik.values.title}
//               />
//               {formik.errors.title && <p className="text-sm text-red-500 text-left ml-10">{formik.errors.title}</p>}
//             </div>

//             {/* Price Input */}
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2 ml-10 mt-7 font-semibold mr-[32rem]">Price
//                 <span className='text-red-500'>*</span>
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 placeholder="Price"
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-10"
//                 onChange={formik.handleChange}
//                 value={formik.values.price}
//               />
//               {formik.errors.price && <p className="text-sm text-red-500 text-left ml-10">{formik.errors.price}</p>}
//             </div>

//             <div className='flex flex-col'>
//               <label htmlFor="image" className='text-start mt-3 ml-10 font-semibold'>Upload Image
//                 <span className='text-red-500'>*</span>
//               </label>
//               <input type="file"
//                 name="image"
//                 id="image"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className='cursor-pointer w-full md:w-[40%] h-9 border-gray-500 rounded-md my-1 outline-blue-400  ml-10 '
//               />
//               {formik?.errors?.image && <p className=' text-sm text-red-500 text-left'>{formik?.errors?.image}</p>}


//               <p className='text-red-500 text-xs text-start leading-3 my-2 ml-10'>Width: 1200px and Height: 400px</p>
//               <div className='w-[99%] md:mx-0 sm:w-[100%] lg:w-[600px] h-[300px] border border-gray-400' style={{ marginLeft: '50px' }}>
//                 {
//                   imagePreview &&
//                   <img src={imagePreview} alt="Preview" className='w-[100%] h-[300px]' />
//                 }
//               </div>

//             </div>

//             {/* Content Security Options */}
//             <div className="mb-4 mt-7">
//               <label className="block text-gray-700 mb-2 ml-10 mt-7 font-semibold mr-[26rem]">Content Security</label>
//               <div className="mb-2 mt-5">
//                 <input
//                   type="radio"
//                   id="encryption"
//                   name="contentSecurity"
//                   value="encryption"
//                   checked={encryption === 'encryption'}
//                   onChange={() => setEncryption('encryption')}
//                   className="mr-3"
//                 />
//                 <label htmlFor="encryption" className="mr-[25rem]">Encryption</label>
//                 <p className="text-gray-500 text-sm mt-1 ml-20 ">
//                   Secure content will be encrypted using a DRM system and protected against piracy.
//                 </p>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   id="noEncryption"
//                   name="contentSecurity"
//                   value="noEncryption"
//                   checked={encryption === 'noEncryption'}
//                   onChange={() => setEncryption('noEncryption')}
//                   className="mr-3"
//                 />
//                 <label htmlFor="noEncryption" className="mr-[23rem]">No Encryption</label>
//                 <p className="text-gray-500 text-sm mt-1 ml-20 ">
//                   Content will not be encrypted. Unsecure content can be easily downloaded and pirated.
//                 </p>
//               </div>
//             </div>

//             {/* Action Button */}
//             <div className="flex justify-end space-x-4 ml-[40rem]">
//               <button
//                 type="submit"
//                 className="px-8 mt-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//               >
//                 Create
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </DashboardLayoutBasic>
//   );
// };

// export default CourseForm;


import React, { useState } from 'react';
import DashboardLayoutBasic from "../DashboardLayoutBasic";
import { useFormik } from 'formik';
import CourseFormvalidation from './CourseformValidation';
import API_BASE_URL from '../../config';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Add this import

const CourseForm = () => {
  const [encryption, setEncryption] = useState('noEncryption');
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate(); // Use useNavigate

  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      image: null,
      security: encryption, 
    },
    validationSchema: CourseFormvalidation,
    onSubmit: async (values) => { // Corrected placement of onSubmit
      try {
        const res = await axios.post(`${API_BASE_URL}/api/course/createCourse`, {
          title: values.title,
          price: values.price,
          security: encryption,
         
        });
        if (res?.data?.status) {
          toast.success(res.data.message);
          setTimeout(() => {
            navigate("/contents/courses");
          }, 3000);
        }
      } catch (error) {
        toast.error(error?.message);
        console.log("Error occurred during course submit", error);
      }
    },
  });

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

  return (
    <DashboardLayoutBasic>
      <div className="flex mr-[40rem]">
        <div className="bg-white p-6 rounded-lg w-[40rem]">
          <h1 className="text-3xl font-semibold mb-1 mr-[20rem]">Create Course</h1>
          <p className="text-gray-600 mr-[20rem] font-light">Start creating a new course</p>
          <form onSubmit={formik.handleSubmit}>
            {/* Title Input */}
            <div>
              <div className="flex">
                <label className="block text-gray-700 mb-2 ml-10 mt-7 font-semibold">Title
                  <span className='text-red-500'>*</span>
                </label>
                <p className="text-gray-500 text-sm mt-7 ml-[510px]">{formik.values.title.length}/60</p>
              </div>
              <input
                type="text"
                name="title"
                maxLength="60"
                placeholder="Enter course title"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-10"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              {formik.errors.title && <p className="text-sm text-red-500 text-left ml-10">{formik.errors.title}</p>}
            </div>

            {/* Price Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 ml-10 mt-7 font-semibold mr-[32rem]">Price
                <span className='text-red-500'>*</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-10"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
              {formik.errors.price && <p className="text-sm text-red-500 text-left ml-10">{formik.errors.price}</p>}
            </div>

            <div className='flex flex-col'>
              <label htmlFor="image" className='text-start mt-3 ml-10 font-semibold'>Upload Image
                <span className='text-red-500'>*</span>
              </label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className='cursor-pointer w-full md:w-[40%] h-9 border-gray-500 rounded-md my-1 outline-blue-400 ml-10'
              />
              {formik?.errors?.image && <p className='text-sm text-red-500 text-left'>{formik?.errors?.image}</p>}

              <p className='text-red-500 text-xs text-start leading-3 my-2 ml-10'>Width: 1200px and Height: 400px</p>
              <div className='w-[99%] md:mx-0 sm:w-[100%] lg:w-[600px] h-[300px] border border-gray-400' style={{ marginLeft: '50px' }}>
                {
                  imagePreview &&
                  <img src={imagePreview} alt="Preview" className='w-[100%] h-[300px]' />
                }
              </div>
            </div>

            {/* Content Security Options */}
            <div className="mb-4 mt-7">
              <label className="block text-gray-700 mb-2 ml-10 mt-7 font-semibold mr-[26rem]">Content Security</label>
              <div className="mb-2 mt-5">
                <input
                  type="radio"
                  id="encryption"
                  name="contentSecurity"
                  value="encryption"
                  checked={encryption === 'encryption'}
                  onChange={() => setEncryption('encryption')}
                  
                  className="mr-3"
                />
                <label htmlFor="encryption" className="mr-[25rem]">Encryption</label>
                <p className="text-gray-500 text-sm mt-1 ml-20 ">
                  Secure content will be encrypted using a DRM system and protected against piracy.
                </p>
              </div>
              <div>
                <input
                  type="radio"
                  id="noEncryption"
                  name="contentSecurity"
                  value="noEncryption"
                  checked={encryption === 'noEncryption'}
                  onChange={() => setEncryption('noEncryption')}
                  
                  className="mr-3"
                />
                <label htmlFor="noEncryption" className="mr-[23rem]">No Encryption</label>
                <p className="text-gray-500 text-sm mt-1 ml-20 ">
                  Content will not be encrypted. Unsecure content can be easily downloaded and pirated.
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-end space-x-4 ml-[40rem]">
              <button
                type="submit"
                className="px-8 mt-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayoutBasic>
  );
};

export default CourseForm;

