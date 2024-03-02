import { Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ROUTES_PATH_ROOT, ROUTES_PARAMS_ALL, ROUTES_PATH_USERS } from '../constants/Routes';
import BaseLayout from '../components/BaseLayout';
import Home from '../pages/Home';
import Users from '../pages/Users';

export default function RouterConfig() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0, // 0
        gcTime: 1000 * 60 * 5, // 5분
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <BaseLayout>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path={ROUTES_PATH_ROOT} element={<Home />} />
            <Route path={`${ROUTES_PATH_USERS}/${ROUTES_PARAMS_ALL}`} element={<Users />} />
            <Route path={ROUTES_PARAMS_ALL} element={<Navigate to={ROUTES_PATH_ROOT} />} />
          </Routes>
        </QueryClientProvider>
      </RecoilRoot>
    </BaseLayout>
  );
}
