import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  Select,
  Input,
  Button,
  StatusCircle,
  Statistics,
  StatisticsItem,
  StatisticsTitle,
  StatisticsValue,
} from '../../../components/Style';
import { Container, OptionContainer, Options, TableContainer } from './Style';
import { getUsers, getStatuses, getRoles } from '../../../apis/users';

export default function UserList() {
  const navigate = useNavigate();
  const [roleState, setRoleState] = useState(0);
  const [statusState, setStatusState] = useState(0);
  const [inputValue, setInputValue] = useState('');
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
    <Container>
      {users && (
        <>
          <Statistics>
            <StatisticsItem>
              <StatisticsTitle>전체 사용자</StatisticsTitle>
              <StatisticsValue>{users.length}</StatisticsValue>
            </StatisticsItem>
            <StatisticsItem>
              <StatisticsTitle>온라인 사용자</StatisticsTitle>
              <StatisticsValue>
                {users.filter((el) => el.status === statuses.find((el) => el.name === 'active').id).length}
              </StatisticsValue>
            </StatisticsItem>
            <StatisticsItem>
              <StatisticsTitle>오프라인 사용자</StatisticsTitle>
              <StatisticsValue>
                {users.filter((el) => el.status === statuses.find((el) => el.name === 'inactive').id).length}
              </StatisticsValue>
            </StatisticsItem>
            <StatisticsItem>
              <StatisticsTitle>관리자</StatisticsTitle>
              <StatisticsValue>
                {users.filter((el) => el.role === roles.find((el) => el.name === 'admin').id).length}
              </StatisticsValue>
            </StatisticsItem>
          </Statistics>
          <OptionContainer>
            <Options>
              <Select
                onChange={(e) => {
                  setRoleState(+e.target.value);
                }}
              >
                <option value='0'>권한 전체</option>
                {roles.map((role, index) => (
                  <option key={index} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </Select>
              <Select
                onChange={(e) => {
                  setStatusState(+e.target.value);
                }}
              >
                <option value='0'>상태 전체</option>
                {statuses.map((status, index) => (
                  <option key={index} value={status.id}>
                    {status.name}
                  </option>
                ))}
              </Select>
              <Input
                placeholder='검색'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setInputValue(e.target.value);
                  }
                }}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (newValue === '') {
                    setTimeout(() => {
                      setInputValue('');
                    }, 300);
                  }
                }}
              />
            </Options>
            <Button
              onClick={() => {
                navigate('/users/registration');
              }}
            >
              사용자 추가
            </Button>
          </OptionContainer>
          <TableContainer>
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
                {users
                  .filter((el) => (roleState === 0 ? true : el.role === roleState))
                  .filter((el) => (statusState === 0 ? true : el.status === statusState))
                  .filter((el) => (inputValue === '' ? true : el.name.includes(inputValue)))
                  .map((user, index) => (
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
          </TableContainer>
        </>
      )}
    </Container>
  );
}
