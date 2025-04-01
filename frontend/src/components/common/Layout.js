import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = ({ isLoggedIn, userEmail, handleLogout }) => {
  console.log('Layout 렌더링');
  console.log('isLoggedIn:', isLoggedIn);
  console.log('userEmail:', userEmail);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        handleLogout={handleLogout}
      />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;