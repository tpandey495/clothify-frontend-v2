import Navbar from './Navbar/Navbar';
import MiddleNav from './Navbar/MiddleNav';

const wholeNavbar = () => {
    return (
        <div className="wholeNavbar" style={{position: "fixed",
            width:"100%",top:"0"}}>
            <Navbar />
            <MiddleNav />
        </div>
    )
}

export default wholeNavbar;
