import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES_PATH_ROOT, ROUTES_PATH_USERS } from '../constants/Routes';

const Logo = styled.img`
  width: auto;
  height: 30px;
`;

const NavbarContainer = styled.div`
  background-color: #f6f8fa;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 8px;
  box-shadow: #d0d7de 0px -1px 0px 0px inset;
`;

const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NavbarItem = styled(Link)`
  color: ${(props) => (props.$active ? '#1f2328' : '#586069')};
  font-weight: ${(props) => (props.$active ? 600 : 400)};
  text-decoration: none;
  margin: 0 10px;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  line-height: 30px;
  padding: 0 8px;
  text-align: center;
  &:hover {
    background-color: #d0d7de52;
    transition: background 0.12s ease-out;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.indexOf(path) !== -1;
  };

  return (
    <NavbarContainer>
      <Logo src='/logo.png' />
      <NavbarItems>
        <NavbarItem to={ROUTES_PATH_ROOT} $active={isActive(ROUTES_PATH_ROOT)}>
          안내
        </NavbarItem>
        <NavbarItem
          to={ROUTES_PATH_USERS}
          $active={isActive(ROUTES_PATH_USERS)}
        >
          과제
        </NavbarItem>
      </NavbarItems>
    </NavbarContainer>
  );
};

const Contatiner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  overflow: hidden;
`;

export default function BaseLayout({ children }) {
  return (
    <Contatiner>
      <Navbar />
      <Content>{children}</Content>
    </Contatiner>
  );
}
