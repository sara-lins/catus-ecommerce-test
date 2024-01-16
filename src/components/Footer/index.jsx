import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>Central de Atendimento</h3>
          <div>
            <nav>
              <a href="/">Ajuda e suporte</a>
              <a href="/">Fale conosco</a>
              <a href="/">Faq</a>
            </nav>
            <span>
              <p>
                <strong>Whatsapp: (11) 99999-9999</strong>
              </p>
            </span>
            <span>
              <p>
                <strong>Nossos horários</strong>
              </p>
              <p>Segunda a sexta das 9h às 18h</p>
            </span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <h3>Selos de Segurança</h3>
          <div>
            <span className={styles.securityAssets}>
              <img src="./assets/security/selo-google.webp" alt="Selo Google" />
              <img
                src="./assets/security/selo-lojaprotegida.webp"
                alt="Selo Loja Protegida"
              />
            </span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <h3>Formas de Pagamento</h3>
          <span className={styles.paymentAssets}>
            <img
              src="./assets/payments/visa.webp"
              alt="imagem ilustrativa da bandeira Visa"
            />
            <img
              src="./assets/payments/mastercard.webp"
              alt="imagem ilustrativa da bandeira Mastercard"
            />
            <img
              src="./assets/payments/amex.webp"
              alt="imagem ilustrativa da bandeira Amex"
            />
            <img
              src="./assets/payments/diners.webp"
              alt="imagem ilustrativa da bandeira Diners"
            />
            <img
              src="./assets/payments/discover.webp"
              alt="imagem ilustrativa da bandeira Discover"
            />
            <img
              src="./assets/payments/boleto.webp"
              alt="imagem ilustrativa da bandeira Boleto"
            />
            <img
              src="./assets/payments/pix.webp"
              alt="imagem ilustrativa da bandeira do Pix"
            />
          </span>
        </div>
      </div>
    </footer>
  );
}
