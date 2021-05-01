// const { createSlice } = require("@reduxjs/toolkit");
 import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
 import userApi from '../../api/userApi'

// First, create the thunk
export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
      //call api to register
        const data = await userApi.register(payload);
      //save data tp local storage
      localStorage.setItem('access_token', data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user))

      //return user data
      return data.user;
    }
  )

const userSlice =  createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {},
    },
    reducers: {},
    extraReducers: {
        [register.fulfilled] : (state, action) => {
            state.current  = action.payload;
        }
    }
});

const {reducer} = userSlice;

export default reducer; //default export