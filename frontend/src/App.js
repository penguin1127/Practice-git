import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import MainPage from './pages/MainPage';
import TeamRecruitPage from './pages/TeamRecruitPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/team-recruit" element={<TeamRecruitPage />} />
          <Route path="/team-recruit/:id" element={<TeamRecruitPage />} />
          <Route path="/signup" element={<Register />} /> {/* 회원가입 경로 */}
          <Route path="/login" element={<Login />} /> {/* 로그인 경로 */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
