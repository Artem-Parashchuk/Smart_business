import { useSelector } from "react-redux";

import { selectFilters } from "../../redux/users/selectors";

import s from "./TableHead.module.css";
import { UserFilters } from "../../interfaces/UserFilters";

interface TableHeadProps {
  handleFilterChange: (field: keyof UserFilters, value: string) => void;
}

export const TableHead: React.FC<TableHeadProps> = ({ handleFilterChange }) => {
  const filters = useSelector(selectFilters);

  return (
    <>
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
            aria-label="Search name"
            title="Search name"
            value={filters.name}
            onChange={(e) => handleFilterChange("name", e.target.value)}
          />
        </td>
        <td>
          <input
            className={s.input}
            type="text"
            placeholder="Search username"
            aria-label="Search username"
            title="Search username"
            value={filters.username}
            onChange={(e) => handleFilterChange("username", e.target.value)}
          />
        </td>
        <td>
          <input
            className={s.input}
            type="text"
            placeholder="Search email"
            aria-label="Search email"
            title="Search email"
            value={filters.email}
            onChange={(e) => handleFilterChange("email", e.target.value)}
          />
        </td>
        <td>
          <input
            className={s.input}
            type="number"
            placeholder="Search phone"
            aria-label="Search phone"
            title="Search phone"
            value={filters.phone}
            onChange={(e) => handleFilterChange("phone", e.target.value)}
          />
        </td>
      </tr>
    </>
  );
};
