import { products } from "@/shared/products";
import Cards from "../Cards";

import styles from "./styles.module.scss";

export default function Slider() {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h4>Oportunidades para economizar</h4>
        <span></span>
        <span className={styles.detail}>_</span>
        <span></span>
      </div>

      <div className={styles.products}>
        <span className={styles.productsContainer}>
          {products.map((product, index) => (
            <Cards
              key={index}
              image={product.image}
              description={product.description}
              installments={product.installments}
              price={product.price}
            />
          ))}
        </span>
      </div>
    </section>
  );
}
