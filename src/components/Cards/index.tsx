import { Link } from 'react-router-dom';
import styles from './Cards.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact} from 'react-icons/fa';
import { BsArrowRight} from 'react-icons/bs';

type Props = {
  name: string;
  description: string;
  html_url: string;
}
function Cards({name, description, html_url}: Props) {
  return ( 
    <section className={styles.cards}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
        </div>
          <Link to={html_url} className={styles.botao}>
            <BsArrowRight />
          </Link>
      </div>
    </section>
   );
}

export default Cards;