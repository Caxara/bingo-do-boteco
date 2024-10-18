import { TituloDeQuadrante } from "../TituloDeQuadrante";
import "./styles.css";
export function MostradorDePremios() {
  return (
    <div className="MostradorDePremios">
      <TituloDeQuadrante titulo="RODADA N°" />
      <div className="VisorNumeroRodada">
        <div className="VisorNumeroRodadaNumero">
          <p></p>
        </div>
      </div>
      <div className="ValorDaCartela">
        <p>VALOR</p>
        <div className="ValorDaCartelaNumero">
          <p></p>
        </div>
      </div>
      <div className="Premio">
        <div className="PremioTexto">
          <p className="Medalha">1°</p>
          <p>QUADRA</p>
        </div>
        <div className="PremioValor"></div>
      </div>
      <div className="Premio">
        <div className="PremioTexto">
          <p className="Medalha">2°</p>
          <p>QUINA</p>
        </div>
        <div className="PremioValor"></div>
      </div>
      <div className="Premio">
        <div className="PremioTexto">
          <p className="Medalha">3°</p>
          <p>KENO</p>
        </div>
        <div className="PremioValor"></div>
      </div>
    </div>
  );
}
