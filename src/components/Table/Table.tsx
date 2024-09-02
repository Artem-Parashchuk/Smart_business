import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../redux/store";
import { fetchUsers } from "../../redux/thunks";
import { clearFilters, setFilter, User } from "../../redux/usersSlice";
import {
  selectError,
  selectFilteredUsers,
  selectFilters,
  selectLoading,
} from "../../redux/selectors";
import { UserFilters } from "../../redux/usersSlice";

import { UserItem } from "../UserItem/UserItem";
import { Loader } from "../Loader/Loader";
import { ModalWindow } from "../ModalWindow/ModalWindow";

import s from "./Table.module.css";

export const Table = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filteredUsers = useSelector(selectFilteredUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  const [selectedUser, setSelectedUser] = useState<null | User>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (filteredUsers.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, filteredUsers.length]);

  const handleFilterChange = (field: keyof UserFilters, value: string) => {
    dispatch(setFilter({ field, value }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className={s.main}>
      <div className={s.content}>
        <div className={s.table_container}>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Username</td>
                <td>Email</td>
                <td>Phone</td>
              </tr>
              <tr>
                <td>
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Search name"
                    value={filters.name}
                    onChange={(e) => handleFilterChange("name", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Search username"
                    value={filters.username}
                    onChange={(e) =>
                      handleFilterChange("username", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Search email"
                    value={filters.email}
                    onChange={(e) =>
                      handleFilterChange("email", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    className={s.input}
                    type="text"
                    placeholder="Search phone"
                    value={filters.phone}
                    onChange={(e) =>
                      handleFilterChange("phone", e.target.value)
                    }
                  />
                </td>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length ? (
                filteredUsers.map((user) => (
                  <UserItem
                    onClick={() => handleUserClick(user)}
                    key={user.id}
                    user={user}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan={2}
                    className={s.not_found}
                  >
                    Sorry, nothing found...
                  </td>
                  <td
                    colSpan={2}
                    className={s.not_found}
                  >
                    <button
                      onClick={handleClearFilters}
                      className={s.btn_remove}
                    >
                      Click to remove inputs
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <ModalWindow
          user={selectedUser}
          onClose={closeModal}
        />
      )}
    </main>
  );
};
