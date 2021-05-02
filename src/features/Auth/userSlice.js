// const { createSlice } = require("@reduxjs/toolkit");
 import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import StorageKeys from '../../constants/storage-keys';

// First, create the thunk

//Register
export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
      //call api to register
        const data = await userApi.register(payload);
      //save data tp local storage
      localStorage.setItem(StorageKeys.TOKEN, data.jwt);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

      //return user data
      return data.user;
    }
  )


//Login
export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    //call api to login
      const data = await userApi.login(payload);
    //save data tp local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

    //return user data
    return data.user;
  }
)

const userSlice =  createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {},
    extraReducers: {
        [register.fulfilled] : (state, action) => {
            state.current  = action.payload;
        },
        [login.fulfilled] : (state, action) => {
          state.current  = action.payload;
      }
    }
});

const {reducer} = userSlice;

export default reducer; //default export