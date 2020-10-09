import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';
import Head from './Head';

const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = React.useState(null);
  const [loadingProduto, setLoadingProduto] = React.useState(false);
  const [errorProduto, setErrorProduto] = React.useState(null);

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setErrorProduto(null);
        setLoadingProduto(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setErrorProduto('Um erro ocorreu no carregamento de produto');
      } finally {
        setLoadingProduto(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);
  if (loadingProduto) return <div className="loading"></div>;
  if (errorProduto) return <p>{errorProduto}</p>;
  if (produto === null) return null;
  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Esse é o produto ${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
