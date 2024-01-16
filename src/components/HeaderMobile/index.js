import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function HeaderMobile() {
  return (
    <header className={styles.header}>
      <Link href="https://catus.com.br/">
        <picture>
          <Image
            alt="logo Catus"
            src="./icons/menu.svg"
            width={35}
            height={35}
          ></Image>
        </picture>
      </Link>

      <Link href="https://catus.com.br/">
        <picture>
          <Image
            alt="logo Catus"
            src="./catus-logo.svg"
            width={150}
            height={150}
          ></Image>
        </picture>
      </Link>

      <button>
        <Image
          alt="ícone de carrinho"
          src="./icons/cart.svg"
          height={30}
          width={30}
        />
      </button>
    </header>
  );
}
