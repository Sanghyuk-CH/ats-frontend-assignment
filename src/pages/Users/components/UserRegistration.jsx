import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Title, Label, Input, Select, Button } from '../../../components/Style';
import { RegistrationContainer, Box, ButtonContainer } from './Style';
import { getRoles, postUser } from '../../../apis/users';
import { useNavigate } from 'react-router-dom';

export default function UserRegistration() {
  const navigate = useNavigate();
  const [role, setRole] = useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailDomain, setEmailDomain] = useState('atlasnetworks.co.kr');

  const { data: roles } = useQuery({
    queryKey: ['roles'],
    queryFn: () => getRoles(),
  });

  const { mutate: registrationUser } = useMutation({
    mutationFn: async () => {
      return await postUser({ name, email, role });
    },
    onSuccess: (data) => {
      navigate('/users');
      window.alert(data);
    },
    onError: (error) => {
      window.alert(error);
    },
  });

  const handleRegistration = () => {
    const completeEmail = `${email}@${emailDomain}`;
    registrationUser({ name, email: completeEmail, role });
  };

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
            setName(e.target.value);
          }}
        />
      </Box>
      <Box>
        <Label>Email</Label>
        <div>
          <Input
            placeholder='Email을 입력하세요.'
            onChange={(e) => {
              setEmail(e.target.value);
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
            setRole(+e.target.value);
          }}
        >
          <option value='0'>권한 전체</option>
          {roles &&
            roles.map((role) => (
              <option key={`${role.id}-${role.name}`} value={role.id}>
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
        <Button onClick={handleRegistration}>추가</Button>
      </ButtonContainer>
    </RegistrationContainer>
  );
}
