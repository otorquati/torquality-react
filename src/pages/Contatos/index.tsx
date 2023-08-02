import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Contatos.module.css';

// Importação dos ícones da página
import { GoMail } from 'react-icons/go';
import { BsYoutube, BsGithub, BsLinkedin} from 'react-icons/bs';

function Contatos() {
  return ( 
    <>
      <Header />
      <Container>
        <section className={styles.contato}>
        <h2>Contato</h2>
        <h3>Entre em contato</h3>
        <p>Keep in touch</p>
        <p>Para que possamos conversar mais sobre e agendar uma visita.</p>
          <div className={styles.icones}>
            <a href="mailto:torquati.osvaldo@gmail.com" target='_blank' aria-label="E-mail" rel='noopener noreferrer'>
              <GoMail className={styles.icone} />
            </a>
            <a href="https://www.youtube.com/channel/UCAUreWl8qzgMgO4Fl26yFVw" target='_blank' aria-label="Inscreva-se no canal" rel='noopener noreferrer'>
              <BsYoutube className={styles.icone} />
            </a>
            <a href="https://github.com/otorquati" target='_blank' aria-label="Confira nossos repositórios" rel='noopener noreferrer'>
              <BsGithub className={styles.icone} />
            </a>
            <a href="https://www.linkedin.com/in/osvaldo-t-4a8b4439/" target='_blank' aria-label="Siga-nos..."rel='noopener noreferrer'>
              <BsLinkedin className={styles.icone} />
            </a>
          </div>
        </section>
      </Container>
      <Footer/>
    </>
   );
}

export default Contatos;