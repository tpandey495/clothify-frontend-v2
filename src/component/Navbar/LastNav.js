import React, { useState, useRef } from 'react';
import 'styles/lastnav.css';
import navData from 'config/navData';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import useClickOutside from 'utils/useClickOutside'; 
import {Link} from 'react-router-dom';

const DropDown = React.forwardRef(({ dropItem }, ref) => {
  return (
    <ul className="dropdown" ref={ref}>
      {dropItem.map((childitem) => (
       <Link to={childitem?.path}><li key={childitem?.id}>{childitem?.name}</li></Link>
      ))}
    </ul>
  );
});

const LastNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  // TO handle hamburger open and close
  const [openHamburger, setOpenHamburger] = useState(false);
  const dropdownRef = useRef(null);
  const closeDropdown = () => {
    setOpenDropdown(null);
  };
  // Use your custom hook to handle clicks outside of the dropdown and close the dropdown
  useClickOutside(dropdownRef, closeDropdown);
  const toggleDropdown = (itemId) => {
    if (openDropdown === itemId) {
      setOpenDropdown(null); 
    } else {
      setOpenDropdown(itemId); 
    }
  };
  return (
    <div className="lastnav">
      <div className="toggle-button">
        {openHamburger ? (
          <span onClick={() => setOpenHamburger(!openHamburger)}>
            <RxCross1 />
          </span>
        ) : (
          <span onClick={() => setOpenHamburger(!openHamburger)}>
            <GiHamburgerMenu />
          </span>
        )}
      </div>
      <ul className={openHamburger ? 'lastnav-items' : 'lastnav-collapse'}>
        {navData &&
          navData.map((item) => (
            <li
              className={item?.child ? 'dropdown-wrapper' : ''}
              key={item?.id}
              onClick={(e) => {
                e.stopPropagation(); 
                toggleDropdown(item?.id);
              }}
            >
              {item?.name}
              {/* If DropDown option available and open, show them */}
              {item?.child && openDropdown === item?.id && (
                <DropDown dropItem={item?.child} ref={dropdownRef} />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default LastNav;
