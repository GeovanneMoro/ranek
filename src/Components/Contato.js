import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';
const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <div>
        <img src={foto} alt="Máquina de escrever" />
      </div>
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>geovannemoro@hotmail.com</li>
          <li>(16)99330-1612</li>
          <li>Via Láctea</li>
          <li>Sistema Solar - Terra</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
