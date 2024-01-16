import Image from "next/image";
import HeaderMobile from "../HeaderMobile";
import styles from "./styles.module.scss";

export default function ContainerHeaderMobile() {
  return (
    <div className={styles.container}>
      <HeaderMobile />

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
      </div>
    </div>
  );
}
