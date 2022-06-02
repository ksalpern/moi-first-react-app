import c from './Header.module.css';

const Header = () => {
    return (
        <header className={c.header}>
        <img src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' alt='logo'></img>
       </header>
    );
}

export default Header;