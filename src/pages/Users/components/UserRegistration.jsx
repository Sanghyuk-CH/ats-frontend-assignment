import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Title, Label, Input, Select, Button } from '../../../components/Style';
import { RegistrationContainer, Box, ButtonContainer } from './Style';
import { getRoles, postUser } from '../../../apis/users';
import { useNavigate } from 'react-router-dom';

export default function UserRegistration() {
  const navigate = useNavigate();
  const [roleState, setRoleState] = useState(0);
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailDomain, setEmailDomain] = useState('atlasnetworks.co.kr');
  const { data: roles } = useQuery({
    queryKey: ['roles'],
    queryFn: () => getRoles(),
  });
  const { mutate: registrationUser } = useMutation({
    mutationFn: async () => {
      return await postUser({ name: nameInput, email: emailInput, role: roleState });
    },
    onSuccess: (data) => {
      navigate('/users');
      window.alert(data);
    },
    onError: (error) => {
      window.alert(error);
    },
  });
  return (
    <RegistrationContainer>
      <Box>
        <Title>사용자 추가</Title>
        <p>이 플랫폼을 사용할 사용자를 추가합니다.</p>
      </Box>
      <Box>
        <Label>이름</Label>
        <Input
          placeholder='사용자의 이름을 입력하세요.'
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
        />
      </Box>
      <Box>
        <Label>Email</Label>
        <div>
          <Input
            placeholder='Email을 입력하세요.'
            onChange={(e) => {
              setEmailInput(e.target.value);
            }}
          />
          &nbsp;@&nbsp;
          <Select
            onChange={(e) => {
              setEmailDomain(e.target.value);
            }}
          >
            <option value='atlasnetworks.co.kr'>{emailDomain}</option>
          </Select>
        </div>
      </Box>
      <Box>
        <Label>권한</Label>
        <Select
          onChange={(e) => {
            setRoleState(+e.target.value);
          }}
        >
          <option value='0'>권한 전체</option>
          {roles &&
            roles.map((role, index) => (
              <option key={index} value={role.id}>
                {role.name}
              </option>
            ))}
        </Select>
      </Box>
      <ButtonContainer>
        <Button
          onClick={() => {
            navigate('/users');
          }}
        >
          취소
        </Button>
        <Button
          onClick={() => {
            registrationUser();
          }}
        >
          추가
        </Button>
      </ButtonContainer>
    </RegistrationContainer>
  );
}
