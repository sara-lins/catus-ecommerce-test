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
            <img src="./assets/payments/visa.webp" alt="" />
            <img src="./assets/payments/mastercard.webp" alt="" />
            <img src="./assets/payments/amex.webp" alt="" />
            <img src="./assets/payments/diners.webp" alt="" />
            <img src="./assets/payments/discover.webp" alt="" />
            <img src="./assets/payments/boleto.webp" alt="" />
            <img src="./assets/payments/pix.webp" alt="" />
          </span>
        </div>
      </div>
    </footer>
  );
}
