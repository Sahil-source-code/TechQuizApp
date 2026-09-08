import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstace";

// 1. Register User Thunk
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const res = await axiosInstance.post("/api/auth/register", userData);
      return res.data;
    } catch (error) {
      // Backend se aane wale exact error message ko capture karne ke liye:
      const errorMessage =
        error.response?.data?.message || "Registration failed";
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

// 2. Login User Thunk
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const res = await axiosInstance.post("/api/auth/login", credentials);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed";
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);