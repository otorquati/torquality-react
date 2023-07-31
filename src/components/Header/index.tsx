import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return ( 
    <>
    <header className={styles.header}>
      <Link className={styles.link} to="/">
        <span>Torquality Consulting</span>
      </Link>
      <nav>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/artigos">Artigos</Link>
        <Link className={styles.link} to="/projetos">Projetos</Link>
        <Link className={styles.link} to="/ferramentas">Ferramentas</Link>
        <Link className={styles.link} to="/videos">Vídeos</Link>
        <Link className={styles.link} to="/contatos">Contatos</Link>
        <Link className={styles.link} to="/sobre">Sobre</Link>
      </nav>
    </header>
    </>
    );
}

export default Header;