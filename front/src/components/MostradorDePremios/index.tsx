import "./styles.css";
export function MostradorDePremios() {
  return (
    <div className="MostradorDePremios">
      <h1>RODADA Nº</h1>
      <div className="VisorNumeroRodada">
        <div className="VisorNumeroRodadaNumero">
          <p>77449</p>
        </div>
      </div>
      <div className="ValorDaCartela">
        <p>VALOR</p>
        <div className="ValorDaCartelaNumero">
          <p>5,00</p>
        </div>
      </div>
      <div className="Premio">
        <div className="PremioTexto">
          <p className="Medalha">1°</p>
          <p>QUADRA</p>
        </div>
        <div className="PremioValor">200</div>
      </div>
      <div className="Premio">
        <div className="PremioTexto">
          <p className="Medalha">2°</p>
          <p>QUINA</p>
        </div>
        <div className="PremioValor">300</div>
      </div>
      <div className="Premio">
        <div className="PremioTexto">
          <p className="Medalha">3°</p>
          <p>KENO</p>
        </div>
        <div className="PremioValor">500</div>
      </div>
    </div>
  );
}
