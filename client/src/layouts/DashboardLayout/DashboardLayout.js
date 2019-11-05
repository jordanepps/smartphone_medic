import React from 'react';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import './DashboardLayout.css';

export default function DashboardLayout({ children }) {
  return (
    <>
      <HeaderDashboard />
      <main>{children}</main>
    </>
  );
}
