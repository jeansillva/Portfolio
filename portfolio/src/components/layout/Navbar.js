import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_ul}>
        <li><a href="#Sobre">Sobre</a></li>
        <li><a href="#formacao">Formação</a></li>
        <li><a href="#Hobbies">Hobbies</a></li>
        <li className={styles.li_border}><a href="#Hobbies">Github</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
