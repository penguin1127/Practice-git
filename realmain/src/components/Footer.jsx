import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p className="text-sm">&copy; 2025 Sports-Hub. All rights reserved.</p>
      <p className="text-sm mt-2">
        <a href="#" className="hover:underline">이용 약관</a> | <a href="#" className="hover:underline">개인정보 처리방침</a>
      </p>
    </footer>
  );
};

export default Footer;