import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import styles from './Navbar.module.css';

const Navbar = (isSignedIn) => {
    return (
        <div className={styles.navbar_container}>
            <Link to="/"><img className={styles.logoImg} src={logo} alt="Player 1 Logo" width="300" height="55"/></Link>
            <ul className={styles.navlinks_1 }>
                <li>ABOUT</li>
                <li>GAME</li>
                <li>NEWS</li>
            </ul>
            <div className={styles.navlinks_2}>
                <Link to="/login" className={styles.register_btn}>SIGN UP</Link>
                <Link to="/login" className={styles.login_btn}>LOG IN</Link>
            </div>
        </div>
    )
}

export default Navbar;