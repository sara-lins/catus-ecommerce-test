import Header from "@/components/Header/";
import Banner from "@/components/Banner";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import ContainerHeaderMobile from "@/components/ContainerHeaderMobile";

import styles from "./styles/home.sass";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <ContainerHeaderMobile />
      <Banner />
      <Slider />
      <Footer />
    </main>
  );
}
