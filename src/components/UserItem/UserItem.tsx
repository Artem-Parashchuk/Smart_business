interface UserProps {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  onClick: () => void;
}

export const UserItem: React.FC<UserProps> = ({user, onClick}) => {
  return (
    <tr onClick={onClick}>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone.split(" ")[0].replaceAll('.' , '-')}</td>
    </tr>
  );
};
