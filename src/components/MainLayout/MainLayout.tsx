import { Outlet } from 'react-router-dom';
import { Footer, Header } from '..';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
