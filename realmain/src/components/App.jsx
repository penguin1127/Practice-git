import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PostList from './pages/PostList'; // 게시판 목록 페이지
import PostForm from './pages/PostForm'; // 글 작성 페이지
import UserList from './pages/UserList'; // 회원 목록 페이지 추가
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <MainBanner />
        <div className="container">
          <Routes>
            {/* 메인 페이지 */}
            <Route path="/" element={<MainContent />} />
            
            {/* 개인 지원 게시판 */}
            <Route path="/personal-support" element={<PostList />} />
            
            {/* 후기 게시판 */}
            <Route path="/reviews" element={<PostList />} />
            
            {/* 글 작성 페이지 */}
            <Route path="/post-form" element={<PostForm />} />
            
            {/* 회원 목록 페이지 */}
            <Route path="/users" element={<UserList />} />
          </Routes>
          <Sidebar />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;