import { TituloDeQuadrante } from "../TituloDeQuadrante";
import "./style.css";

export function InformacoesElementosSuperiores() {
  return (
    <div className="BlocoGeral">
      <div className="HoraAtual">
        <p>HORA ATUAL</p>
        <div className="MostradorHora"></div>
      </div>
      <div className="ProximaRodada">
        <p>PRÓXIMA RODADA</p>
        <div className="MostradorProximaRodada"></div>
      </div>
      <div className="ValorAcumulado">
        <TituloDeQuadrante titulo="VALOR ACUMULADO" />
        <div className="BlocoDoMostradorELimitador">
          <div className="MostradorValorAcumulado"></div>
          <div className="LimitadorDeBolas"></div>
        </div>
      </div>
    </div>
  );
}
