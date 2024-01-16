import Header from "@/components/Header/";
import Banner from "@/components/Banner";

import styles from "./styles/home.sass";
import ContainerHeaderMobile from "@/components/ContainerHeaderMobile";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <ContainerHeaderMobile />
      <Banner />
      <Slider />
      {/* <section></section>
      <footer></footer> */}
    </main>
  );
}
