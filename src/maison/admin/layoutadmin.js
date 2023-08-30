import React from 'react';
import HeaderAdmin from './headeradmin';
import { Outlet } from 'react-router-dom';
// import Footer from '../../firstScreens/footer';

const LayoutAdmin = () => {
  return (
    <div className='LayoutAdmin'>
        <HeaderAdmin />
        <Outlet />
    </div>
  )
};

export default LayoutAdmin;