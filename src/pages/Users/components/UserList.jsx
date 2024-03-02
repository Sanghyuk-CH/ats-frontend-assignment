import { useQuery } from '@tanstack/react-query';
import { Table, StatusCircle } from '../../../components/Style';
import { getUsers, getStatuses, getRoles } from '../../../apis/users';

export default function UserList() {
  const { data: statuses } = useQuery({
    queryKey: ['statuses'],
    queryFn: () => getStatuses(),
  });

  const { data: roles } = useQuery({
    queryKey: ['roles'],
    queryFn: () => getRoles(),
  });

  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
    enabled: !!statuses && !!roles,
    select: (user) => {
      return user.sort((a, b) => {
        if (a.status !== b.status) {
          return a.status - b.status;
        } else {
          return new Date(b.lastLogin) - new Date(a.lastLogin);
        }
      });
    },
  });

  return (
    <div>
      {users && (
        <Table>
          <thead>
            <tr>
              <th>상태</th>
              <th>이름</th>
              <th>이메일</th>
              <th>권한</th>
              <th>최근 접속일</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  <StatusCircle $color={statuses.find((el) => el.id === user.status).color} />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{roles.find((el) => el.id === user.role).name}</td>
                <td>{user.lastLogin}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
