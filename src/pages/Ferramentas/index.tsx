import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Ferramentas.module.css';

function Ferramentas() {
  return ( 
    <>
    <Header />
        <div className={styles.bio}>
          <div>
            <span>Ferramentas da Qualidade</span>
          </div>      
        </div>
    <Container>
      <section className={styles.container}>
        <div className={styles.description}>
          <p>Há inumeras ferramentas para melhoria do desempenho
            de um sistema de gestão aqui destacamos as 7 ferramentas
            principais e listamos também, as mais utilizadas pelas
            boas práticas de gestão. 
          </p>
        </div>
        <div className={styles.tabela}>
          <table id="Forms">
            <thead>
              <th scope="col">Item</th>
              <th scope="col">Formulário</th>
              <th scope="col">Download</th>
            </thead>
            <tbody>
              <tr>
                <td >1</td>
                <td>2.01 Project_Charter_Template</td>
                <td><a href="./forms/2.01 Project_Charter_Template.xls" target="_blank">Modelo de Gráfico de Projeto</a></td>
              </tr>
              <tr>
                <td >2</td>
                <td>8D Report</td>
                <td><a href="./forms/8DReport_LieferantenEnglisch.xls" target="_blank">Relatório 8D</a></td>
              </tr>
              <tr>
                <td >3</td>
                <td>Plano de Coleta de Dados</td>
                <td><a href="./forms/Data-Collection-Plan.xls" target="_blank">Plano de Coleta de Dados</a></td>
              </tr>
              <tr>
                <td >4</td>
                <td>Design-FMEA</td>
                <td><a href="./forms/Design-FMEA.xls" target="_blank">Design-FMEA</a></td>
              </tr>
              <tr>
                <td >5</td>
                <td>Diagrama de Hishikawa</td>
                <td><a href="./forms/Fishbone-Diagram.xls">Fishbone-Diagram</a></td>
              </tr>
              <tr>
                <td >6</td>
                <td>Gage-RR-Variable-Data-Graphical-Analysis</td>
                <td><a href="./forms/Gage-RR-Variable-Data-Graphical-Analysis.xls">Gage-RR-Variable-Data-Graphical-Analysis</a></td>
              </tr>
              <tr>
                <td >7</td>
                <td>Implantação da Função Qualidade (QFD)</td>
                <td><a href="./forms/House-of-Quality.xls">House-of-Quality</a></td>
              </tr>
              <tr>
                <td >8</td>
                <td>Calculadora PPM</td>
                <td><a href="./forms/PPM-Calculator.xls">PPM-Calculator</a></td>
              </tr>
              <tr>
                <td class="Item">9</td>
                <td>Ferramenta de Solução de Problemas</td>
                <td><a href="./forms/Problem_Solving_Tools.xls">Problem_Solving_Tools</a></td>
              </tr>
              <tr>
                <td >10</td>
                <td>Diagrama de Fluxo de Processo</td>
                <td><a href="./forms/Process-Flow-Diagram.xls">Process-Flow-Diagram</a></td>
              </tr>
              <tr>
                <td >11</td>
                <td>FMEA de Processo</td>
                <td><a href="./forms/Process-FMEA.xls">Process-FMEA</a></td>
              </tr>
              <tr>
                <td >12</td>
                <td>FMEA de Projeto</td>
                <td><a href="./forms/Design-FMEA.xls">Design-FMEA</a></td>
              </tr>
              <tr>
                <td >13</td>
                <td>Análise de Causa/Efeito</td>
                <td><a href="./forms/Root-Cause-Analysis-Timeline.xls">Root-Cause-Analysis-Timeline</a></td>
              </tr>
              <tr>
                <td>14</td>
                <td>z-table</td>
                <td><a href="./forms/z-table.xls" >z-table</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Container>
    <Footer />
    </>
   );
}

export default Ferramentas;