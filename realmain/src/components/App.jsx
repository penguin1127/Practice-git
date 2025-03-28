import React from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <div className="container">
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default App;