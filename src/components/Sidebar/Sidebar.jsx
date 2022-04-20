import React from 'react';
import c from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={c.nav}>
<div className={c.item}>
  <a href='/profile'>Profile</a>
</div>
<div className={c.item}>
  <a href='/dialogs'>Messages</a>
</div>
<div className={c.item}>
  <a href='/news'>News</a>
</div>
<div className='item'>
  <a href='/music'>Music</a>
</div>
<div className='item'>
  <a href='/seettings'>Settings</a>
</div>
</nav>
    );
}
export default Sidebar;