import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data:[],
  loading:false,
};

const ScheduleLiveCourses=createAsyncThunk(
    "course/scheduleLiveCourse",
    async (params) => {
        
    });

export const ScheduleCourseSlice = createSlice({
  name: 'scheduleCourse',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers:(builder)=>{
    builder?.addCase();
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer