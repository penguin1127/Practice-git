import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import TeamRecruitment from './pages/TeamRecruitment';
import IndividualSupport from './pages/IndividualSupport';
import ReviewBoard from './pages/ReviewBoard';
import MyPage from './pages/MyPage';
import SignUp from './pages/SignUp'; // 회원가입 페이지 추가
import Login from './pages/Login'; // 로그인 페이지 추가
import { DataProvider } from './context/DataContext';
import './index.css';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="bg-gray-100 min-h-screen flex flex-col">
          <Header />
          <div className="flex flex-1 container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/team-recruitment" element={<TeamRecruitment />} />
              <Route path="/individual-support" element={<IndividualSupport />} />
              <Route path="/review-board" element={<ReviewBoard />} />
              <Route path="/my-page" element={<MyPage />} />
              <Route path="/sign-up" element={<SignUp />} /> {/* 회원가입 라우트 */}
              <Route path="/login" element={<Login />} /> {/* 로그인 라우트 */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
