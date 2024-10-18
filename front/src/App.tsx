import { ContadorDeBolasLancadasPorOrdemDeChamada } from "./components/ContadorDeBolasLancadasPorOrdemDeChamada";
import { MostradorDePremios } from "./components/MostradorDePremios";
import { BolaSorteada } from "./components/BolaSorteada";
import { InformacoesElementosSuperiores } from "./components/InformacoesElementosSuperiores";

function App() {
  return (
    <div className="tela-cheia">
      <div className="tela-cheia-parte-superior">
        <div className="tela-cheia-parte-superior-esquerda">
          <div className="PosicaoAcima">
            <MostradorDePremios />
          </div>
          <div className="PosicaoAbaixo">
            <BolaSorteada />
          </div>
        </div>
        <div className="tela-cheia-parte-superior-direita">
          <div className="tresElementosSuperiores">
            <InformacoesElementosSuperiores />
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
  );
}

export default App;
