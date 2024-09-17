import styles from "./page.module.css";
import { Header, SideMenue } from "@/components";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      Body
      <SideMenue/>
    </div>
  );
}
