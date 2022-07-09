import SubtitleVendas from "../../components/Headings/SubtitleVendas";
import CardStepsContainer from "./CardStepsContainer";
import styles from "../../../styles/Vendas/Briefing.module.scss";

export default function Briefing() {
  return (
    <section className={`${styles.container_briefing} `}>
      <div className="grid-120">
        <SubtitleVendas subtitle={"O caminho até lá"} pointer="." />
        <p>
          Entenda um pouco do processo de criação desde o estudo inicial até a
          implementação.
        </p>
        <CardStepsContainer />
      </div>
    </section>
  );
}
