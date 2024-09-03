import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchUsersThunk } from './thunks';

import { User } from '../../interfaces/User';
import { UserFilters } from '../../interfaces/UserFilters';


interface UserState {
  users: User[];
  loading: boolean
  error: string | null;
  filters: UserFilters;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  }
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ field: keyof UserFilters; value: string }>) => {
      state.filters[action.payload.field] = action.payload.value
    },
    clearFilters: state => {
      state.filters = {
        name: '',
        username: '',
        email: '',
        phone: '',
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false
        state.error = null
        state.users = action.payload
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  }
})

export const { setFilter, clearFilters } = usersSlice.actions
export default usersSlice.reducer;