import styles from './Home.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>
          <div className={styles.presentation}>
            <p>
              Nós somos a <br/>
              <span>Torquality Consulting</span><br/>
              sua consultoria para sistemas de gestão.
            </p>
            <Link to="/sobre" 
              className={styles.btn}>
                Saiba mais sobre nós
            </Link>
          </div>
          <figure className={styles.img}>
            <img className={styles.img_img} src="../../../public/torquality_img.svg" alt="TorQuality" />
          </figure>
        </section>
      </Container>
      <Footer />
    </> 
   );
}

export default Home;