import { RootState } from '../store';
import { createSelector } from 'reselect';

export const selectUsers = (state: RootState) => state.users.users;
export const selectFilters = (state: RootState) => state.users.filters;
export const selectLoading = (state: RootState) => state.users.loading;
export const selectError = (state: RootState) => state.users.error;
export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilters],
  (users, filters) => {
    return users.filter((user) => {
      return (
        user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
        user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        user.phone.toLowerCase().includes(filters.phone.toLowerCase())
      );
    });
  }
);
