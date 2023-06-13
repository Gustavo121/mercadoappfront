import styles from "./Home.module.css";
import ImgHome from "../../img/ImgHome.png";

function Home() {
  return (
    <section className={styles.home_container}>
      <img src={ImgHome} alt="DoMercado" />
      <h1>Bem vindo ao App</h1>
      <p>
        Através da organização e gestão, iremos ajudá-lo a economizar tempo e
        dinheiro.
      </p>
      <a href="/index">Entrar no DOMERCADO</a>
    </section>
  );
}

export default Home;
