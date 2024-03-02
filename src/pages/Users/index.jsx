import { Navigate, Route, Routes } from 'react-router-dom';
import {
  ROUTES_PATH_ROOT,
  ROUTES_PARAMS_ALL,
  ROUTES_PATH_REGISTRATION,
  ROUTES_PATH_USERS
} from '../../constants/Routes';
import UserList from './components/UserList';
import UserRegistration from './components/UserRegistration';

export default function Users() {
  return (
    <Routes>
      <Route path={ROUTES_PATH_ROOT} element={<UserList />} />
      <Route path={ROUTES_PATH_REGISTRATION} element={<UserRegistration />} />
      <Route
        path={ROUTES_PARAMS_ALL}
        element={<Navigate to={ROUTES_PATH_USERS} />}
      />
    </Routes>
  );
}
