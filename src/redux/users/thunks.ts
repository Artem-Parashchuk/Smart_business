import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../interfaces/User";

export const fetchUsersThunk = createAsyncThunk<User[]>('users/fetchUsers', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return data
})