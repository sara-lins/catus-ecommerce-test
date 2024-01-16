import styles from "./styles.module.scss";

export default function Banner() {
  return (
    <section className={styles.section}>
      <span>
        <div>
          <picture>
            <img
              alt="Quarto de bebê com um berço"
              src="/assets/banner/banner-01.webp"
            />
          </picture>
          <picture>
            <img
              alt="Mãe deitada brincando levantando bebê para o alto"
              src="/assets/banner/banner-02.webp"
            />
          </picture>
        </div>

        <div>
          <picture>
            <img
              alt="Mãe ajoelhada mostrando livro para a sua bebê no carrinho"
              src="/assets/banner/banner-03.webp"
              className="banner-03"
            />
          </picture>
        </div>

        <div>
          <picture>
            <img
              alt="Mulher gestante em quarto de bebê segurando uma roupinha"
              src="/assets/banner/banner-04.webp"
            />
          </picture>
          <picture>
            <img
              alt="Casal sentados no sofá abraçados com bebê no colo da mãe"
              src="/assets/banner/banner-05.webp"
            />
          </picture>
        </div>
      </span>
    </section>
  );
}
