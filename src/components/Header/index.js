import Image from "next/image";
import Link from "next/link";
import styles from "./header.sass";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="https://catus.com.br/">
        <figure>
          <Image
            alt="logo Catus"
            src="./catus-logo.svg"
            width={150}
            height={150}
          ></Image>
        </figure>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="">Loja</Link>
          </li>
          <li>
            <Link href="">Login</Link>
          </li>
          <li>
            <Link href="">Sobre</Link>
          </li>
          <li>
            <Link href="">Contato</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.containerSearch}>
        <form>
          <search>
            <input type="search" placeholder="Digite aqui sua busca" />
            <button type="submit">
              <Image
                alt="ícone de busca"
                src="./icons/search.svg"
                height={30}
                width={30}
              />
            </button>
          </search>
        </form>
        <button>
          <Image
            alt="ícone de carrinho"
            src="./icons/cart.svg"
            height={30}
            width={30}
          />
        </button>
      </div>
    </header>
  );
}
