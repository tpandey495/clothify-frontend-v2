import WholeNavbar from './wholeNavbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <>
            <WholeNavbar />
             <Outlet />
            <Footer />
        </>
    )
}

export default Layout;
