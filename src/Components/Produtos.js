import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [loadingProdutos, setLoadingProdutos] = React.useState(false);
  const [errorProdutos, setErrorProdutos] = React.useState(null);
  React.useEffect(() => {
    async function produtosFetch() {
      try {
        setErrorProdutos(null);
        setLoadingProdutos(true);
        const response = await fetch(
          'https://ranekapi.origamid.dev/json/api/produto',
        );
        const json = await response.json();
        setProdutos(json);
      } catch (erro) {
        setErrorProdutos('Erro ocorreu no carregamento de produtos');
      } finally {
        setLoadingProdutos(false);
      }
    }
    produtosFetch();
  }, []);

  if (loadingProdutos) return <div className="loading"></div>;
  if (errorProdutos) return <p>{errorProdutos}</p>;
  if (produtos === null) return null;
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Ranek" description="Descrição do site Ranek" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
