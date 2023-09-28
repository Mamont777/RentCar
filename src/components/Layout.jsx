import { Suspense } from 'react';
import Header from './Header/Header';
import Container from './Container';
import Loader from '../components/Loader/Loader';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="relative flex min-h-screen flex-auto flex-col items-center justify-center dark:bg-slate-900">
      <Header />
      <main className="mt-11 w-full flex-auto">
        <Container className="padding">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </div>
  );
};

export default Layout;
