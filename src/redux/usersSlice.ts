import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUsers } from './thunks';
// import { User } from '../components/UserItem/UserItem';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  }
}
export interface UserFilters {
  name: string;
  username: string;
  email: string;
  phone: string;
}

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
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false
        state.error = null
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  }
})

export const {setFilter, clearFilters} = usersSlice.actions
export default usersSlice.reducer;