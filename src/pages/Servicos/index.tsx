// importação dos Estilos
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Servicos.module.css';

function Servicos() {
  
  return ( 
  <>
    <Header />
    <div className={styles.header}>
          <div>
            <span>Serviços Oferecidos</span>
          </div>      
        </div>
    <Container>
      <section className={styles.container}>
        <table className={styles.tabela}>
        {/*}  <caption>
            <h2>Serviços prestados</h2>
            </caption>*/}
          <thead>
          <tr>
            <th scope='col'>Serviços</th>
            <th scope='col'>Descrição</th>
            <th scope='col'>Norma</th>
            <th scope='col'>Custo (R$/hora)</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='rowgroup' rowSpan={3}>Auditorias</th>
              <td>Gestão de Qualidade</td>
              <td className={styles.norma}>ISO-9001</td>
              <td className={styles.custo}>40,00</td> 
            </tr>
            <tr>
              <td>Gestão de Meio Ambiente</td>
              <td className={styles.norma}>ISO-14001</td>
              <td className={styles.custo}>60,00</td>
            </tr>
            <tr>
              <td>Gestão Integrada Qualidade e Meio Ambiente</td>
              <td className={styles.norma}>ISO-9001 e ISO-14001</td>
              <td className={styles.custo}>80,00</td>
            </tr>
            <tr>
              <th scope='rowgroup' rowSpan={3}>Consultoria</th>
              <td>Gestão de Qualidade</td>
              <td className={styles.norma}>ISO-9001</td>
              <td className={styles.custo}>40,00</td> 
            </tr>
            <tr>
              <td>Gestão de Meio Ambiente</td>
              <td className={styles.norma}>ISO-14001</td>
              <td className={styles.custo}>60,00</td>
            </tr>
            <tr>
              <td>Gestão Integrada Qualidade e Meio Ambiente</td>
              <td className={styles.norma}>ISO-9001 e ISO-14001</td>
              <td className={styles.custo}>80,00</td>
            </tr>
          </tbody>

        </table>
      </section>
    </Container>
    <Footer />
  </>
   );
}

export default Servicos;