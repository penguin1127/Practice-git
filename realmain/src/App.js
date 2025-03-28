import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './index.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 container mx-auto px-4 py-6">
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
