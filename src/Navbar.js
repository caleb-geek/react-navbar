import React,{useState} from 'react';
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleclick = ()=> {
        setOpen(!open)
        
    }


    return ( 
        <div className="navbar_container">
             <div className="logo">DesignX</div>
             <div className="space"></div>
             <ul className="menubar" style={{transform:open ? "translateY(-500px)":"translateY(0px)"}}>
                 <li className="menu-item"><a href="#">Home</a></li>
                 <li className="menu-item"><a href="#">About</a></li>
                 <li className="menu-item"><a href="#">Services</a></li>
                 <li className="menu-item"><a href="#">Contact</a></li>
             </ul>
             <MenuIcon onClick={handleclick} className="hamberger"  />
             
        </div>
     );
}
 
export default Navbar;