import { TituloDeQuadrante } from "../TituloDeQuadrante";
import "./styles.css";
export function BolaSorteada() {
  return (
    <div className="BolaCantada">
      <TituloDeQuadrante titulo="BOLA CANTADA" />
      <div className="CorpoBolaCantada">
        <div className="ContadorBolaCantada">
          <p>Número de</p>
          <p>bolas cantadas</p>
          <div className="ContadorBolaCantadaInside">5</div>
        </div>
        <div className="NumeradorBolaCantada">
          <div className="NumeroDaBolaCantada">
            <div className="NumeroDaBolaCantadaInside">61</div>
          </div>
        </div>
      </div>
    </div>
  );
}
