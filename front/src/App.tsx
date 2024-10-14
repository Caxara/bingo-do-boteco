import { ContadorDeBolasLancadasPorOrdemDeChamada } from "./components/ContadorDeBolasLancadasPorOrdemDeChamada"
import { MostradorDePremios } from "./components/MostradorDePremios"

function App() {
  return (
    <div className="tela-cheia">
      <div className="tela-cheia-parte-superior">
        <div className="tela-cheia-parte-superior-esquerda">
          <div className="PosicaoAcima">
            <MostradorDePremios />
          </div>
          <div className="PosicaoAbaixo"></div>
        </div>
        <div className="tela-cheia-parte-superior-direita">
          <div className="tresElementosSuperiores">
            <div className="RelogioDigital"></div>
            <div className="N_ProximaRodada"></div>
            <div className="ValorAcumulado"></div>
          </div>
          <div className="doisElementosSuperioresCentro">
            <div className="ladoA">
              <div className="LadoATopo">topo</div>
              <div className="LadoACorpo">
                <div className="LadoACorpoEsquerda"></div>
                <div className="LadoACorpoDireita"></div>
              </div>
            </div>
            <div className="ladoB">Lado B</div>
          </div>
        </div>
      </div>
      <div className="tela-cheia-parte-inferior">
        <ContadorDeBolasLancadasPorOrdemDeChamada />
      </div>
    </div>
  )
}

export default App
