import Navbar from './Navbar/Navbar';
import MiddleNav from './Navbar/MiddleNav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const wholeNavbar = () => {
    return (
        <div>
            <Navbar />
            <MiddleNav />
             <Outlet />
            <Footer />
        </div>
    )
}

export default wholeNavbar;
