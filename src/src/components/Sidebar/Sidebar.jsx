import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <nav className={c.nav}>
<div className={`${c.item} ${c.active}`}>
  <NavLink to='/profile' activeClassName={c.activeLink}> Profile</NavLink>
</div>
<div className={`${c.item} ${c.active}`}>
<NavLink to='/dialogs' activeClassName={c.activeLink}>Messages</NavLink>
</div>
<div className={`${c.item} ${c.active}`} >
<NavLink to='/news' activeClassName={c.activeLink}>News</NavLink>
</div>
<div className={`${c.item} ${c.active}`}>
<NavLink to='/music' activeClassName={c.activeLink}>Music</NavLink>
</div>
<div className={`${c.item} ${c.active}`}>
<NavLink to='/seettings' activeClassName={c.activeLink}>Settings</NavLink>
</div>

<div className={`${c.item} ${c.active}`}>
<NavLink to='/friends' ctiveClassName={c.activeLink} friends={props.friends}>Friends</NavLink>
</div>


</nav>
    );
}
export default Sidebar;