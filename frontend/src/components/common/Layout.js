import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 */}
      <Header />

      {/* 페이지 내용 */}
      <main className="flex-grow">{children}</main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}

export default Layout;