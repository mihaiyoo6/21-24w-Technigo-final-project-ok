import { createSlice } from "@reduxjs/toolkit"

const sharings = createSlice({
  name:"sharings",
  initialState: {
    items:[], 
    errors:null
  },
  reducers: {
    setSharings: (store, action) => {
      store.items = action.payload;  
    }, 
    setErrors: (store, action) => {
      store.errors = action.payload;
    }
  }
})

export default sharings;