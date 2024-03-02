import { Routes, Route, Navigate } from 'react-router-dom';
import {
  ROUTES_PATH_ROOT,
  ROUTES_PARAMS_ALL,
  ROUTES_PATH_USERS
} from '../constants/Routes';
import BaseLayout from '../components/BaseLayout';
import Home from '../pages/Home';
import Users from '../pages/Users';

export default function RouterConfig() {
  return (
    <BaseLayout>
      <Routes>
        <Route path={ROUTES_PATH_ROOT} element={<Home />} />
        <Route
          path={`${ROUTES_PATH_USERS}/${ROUTES_PARAMS_ALL}`}
          element={<Users />}
        />
        <Route
          path={ROUTES_PARAMS_ALL}
          element={<Navigate to={ROUTES_PATH_ROOT} />}
        />
      </Routes>
    </BaseLayout>
  );
}
