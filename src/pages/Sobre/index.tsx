import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Sobre.module.css';

import Avatar from '../../images/Torquati_3x4.jpg'

function Sobre() {
  return ( 
  <>
    <Header />
    <Container>
      <section className={styles.container}>
        <div className={styles.bio}>
          <p>Somos a <br/>
          <span>Torquality Consulting</span> <br/>
          uma consultoria com 20 anos de experiência, especializada na implantação/manutenção de 
          sistemas de gestão, seja da Qualidade, Meio Ambiente ou Integrado. </p>
        </div>
        <figure className={styles.img}>
          <img src={Avatar} alt="" />
          <h4>Osvaldo Torquati</h4>
          <p>Diretor</p>
        </figure>
      </section>
    </Container>
    <Footer />
  </>
   );
}

export default Sobre;