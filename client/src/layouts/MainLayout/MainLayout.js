import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import './MainLayout.css';
import Backdrop from '../../components/Backdrop/Backdrop';
import Footer from '../../components/Footer/Footer';

export default function MainLayout({ children }) {
  const [sideDrawerOpen, setSideDrawer] = useState(false);

  const handleDrawerToggle = () => setSideDrawer(!sideDrawerOpen);

  const backdropClickHandler = () => setSideDrawer(false);

  return (
    <>
      <Header drawerHandler={handleDrawerToggle} />
      <SideDrawer show={sideDrawerOpen} close={backdropClickHandler} />
      {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <main className="main-layout-container">{children}</main>
      <Footer />
    </>
  );
}
