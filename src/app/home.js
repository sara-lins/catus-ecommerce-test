import Header from "@/components/Header/";
import Banner from "@/components/Banner";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";

import styles from "./styles/home.sass";
import ContainerHeaderMobile from "@/components/ContainerHeaderMobile";

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
