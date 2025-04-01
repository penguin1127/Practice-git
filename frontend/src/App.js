import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import MainPage from './pages/MainPage';
import MercenaryPage from './pages/MercenaryPage';
import TeamRecruitPage from './pages/TeamRecruitPage';
import PersonalAdPage from './pages/PersonalAdPage';
import MatchRecruitmentPage from './pages/MatchRecruitmentPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  // 테스트 계정으로 로그인된 상태 유지
  const [isLoggedIn, setIsLoggedIn] = useState(true); // 로그인 상태를 true로 설정
  const [userEmail, setUserEmail] = useState('test@example.com'); // 테스트 계정 이메일

  const handleLogin = (email) => {
    console.log('로그인 상태 업데이트');
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              isLoggedIn={isLoggedIn}
              userEmail={userEmail}
              handleLogout={handleLogout}
            />
          }
        >
          <Route index element={<MainPage />} />
          <Route path="mercenary" element={<MercenaryPage />} />
          <Route path="team-recruit" element={<TeamRecruitPage />} />
          <Route path="personal-ad" element={<PersonalAdPage />} />
          <Route path="match-recruitment" element={<MatchRecruitmentPage />} />
          <Route path="login" element={<Login handleLogin={handleLogin} />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
