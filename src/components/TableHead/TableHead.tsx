import { useSelector } from 'react-redux';

import { selectFilters } from '../../redux/selectors';

import s from './TableHead.module.css'
import { UserFilters } from '../../redux/usersSlice';

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
    </>
  );
};
