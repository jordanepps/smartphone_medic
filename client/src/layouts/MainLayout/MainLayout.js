import React from 'react';
import Header from '../../components/Header/Header';
import './MainLayout.css';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="main-layout-container">{children}</main>
      <footer>Footer</footer>
    </>
  );
}
