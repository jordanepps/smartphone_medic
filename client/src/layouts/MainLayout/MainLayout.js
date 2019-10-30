import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import './MainLayout.css';
import Backdrop from '../../components/Backdrop/Backdrop';

export default function MainLayout({ children }) {
  const [sideDrawerOpen, setSideDrawer] = useState(false);

  const handleDrawerToggle = () => setSideDrawer(!sideDrawerOpen);

  const backdropClickHandler = () => setSideDrawer(false);

  return (
    <>
      <Header drawerHandler={handleDrawerToggle} />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <main className="main-layout-container">{children}</main>
      <footer>Footer</footer>
    </>
  );
}
