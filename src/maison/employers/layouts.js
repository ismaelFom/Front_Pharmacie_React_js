import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderEmployer from './headeremployer';
// import Footer from '../../firstScreens/footer';

const Layouts = () => {
  return (
    <div className='Layouts'>
      <HeaderEmployer />
      <Outlet />
    </div>
  )
};

export default Layouts;