import * as Yup from 'yup';

const CourseFormvalidation  = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Title must be at least 5 characters')
    .max(60, 'Title must be 60 characters or less')
    .required('Title is required'),

  price: Yup.string()
    // .min(20, 'Content must be at least 20 characters')
    .required('price is required'),

 
    image: Yup.mixed()
    .required('Image is required')
    .test('fileType', 'Only image files are allowed', (value) => {
      return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    })
    .test('fileSize', 'File too large', (value) => {
      return value && value.size <= 2 * 1024 * 1024; // 2MB limit
    }),


//   tags: Yup.string()
//     // .of(Yup.string().min(2, 'Tag must be at least 2 characters'))
//     .min(1, 'At least one tag is required')
//     .required('Tags are required'),
});

export default CourseFormvalidation;