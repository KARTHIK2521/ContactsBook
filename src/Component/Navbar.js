import React ,{ useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarItems} from './SidebarItems'
import './Navbar.css';
import {IconContext } from 'react-icons'

const  Navbar = () => {
   
    const [sidebar, setsidebar] = useState(false);

    const showSidebar = () => setsidebar(!sidebar);
    return (
        <>
        <div className="row">
       <div className="col-md-12">
        <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
               <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
         
         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose  size={25}/>
                    </Link>
                </li>
             {SidebarItems.map( (item ,index) => {

                 return(
                      <li key={index} className={item.cName}>
                          <Link to={item.path}  className='logo'>
                               {item.icon}
                          </Link>
                      </li>
                 );

             })}

            </ul>
         </nav>
         </IconContext.Provider>
           </div>
           </div>
          </>
    )
};

export default Navbar
