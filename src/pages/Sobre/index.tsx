import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Sobre.module.css';

function Sobre() {
  return ( 
  <>
    <Header />
    <Container>
      <section className={styles.container}>
        <div>
          <p>Somos a <br/>
          <span>Torquality Consulting</span> <br/>
          uma consultoria com 20 anos de experiência, especializada na implantação/manutenção de 
          sistemas de gestão, seja da Qualidade, Meio Ambiente ou Integrado. </p>
        </div>
        <figure className={styles.img}>
          <img src="/src/images/Torquati_3x4.jpg" alt="" />
        </figure>
      </section>
    </Container>
    <Footer />
  </>
   );
}

export default Sobre;