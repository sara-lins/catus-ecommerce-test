import styles from "./styles.module.scss";

export default function Cards({ image, description, price, installments }) {
  return (
    <div className={styles.card}>
      <span>
        <picture>
          <img alt={description} src={image} />
        </picture>
        <p className={styles.description}>{description}</p>
      </span>

      <span className={styles.prices}>
        <p className={styles.previous}>de R$ {price.previous}</p>
        <p className={styles.current}>
          <strong>R$ {price.current}</strong>
        </p>
        <p className={styles.installments}>
          <strong>{installments.amount}x</strong> de{" "}
          <strong>R${installments.price}</strong> sem juros
        </p>
      </span>

      <button>Adicionar ao carrinho</button>
    </div>
  );
}
