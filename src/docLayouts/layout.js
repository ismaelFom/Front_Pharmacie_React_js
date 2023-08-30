import { Outlet } from "react-router-dom";
// import Footer from "./footer";

const Layout = () => {
  return (
    <div className='Layout'>
      
        <Outlet />
      {/* <Footer /> */}
    </div>
  )
};

export default Layout;