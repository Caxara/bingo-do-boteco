import { ContadorDeBolasLancadasPorOrdemDeChamada } from "./components/ContadorDeBolasLancadasPorOrdemDeChamada";
import { MostradorDePremios } from "./components/MostradorDePremios";
import { BolaSorteada } from "./components/BolaSorteada";
import { InformacoesElementosSuperiores } from "./components/InformacoesElementosSuperiores";
import { Sorteando } from "./components/Sorteando";
import { MelhoresCartelas } from "./components/MelhoresCartelas";
import { NumerosSorteadosTitulo } from "./components/NumerosSorteadosTitulo";
import { NumerosLancadosCartela } from "./components/NumerosLancadosCartela";
import { CartelasCompletando } from "./components/CartelasCompletando";

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
              <div className="LadoATopo">
                <Sorteando />
              </div>
              <div className="LadoACorpo">
                <div className="LadoACorpoEsquerda">
                  <MelhoresCartelas />
                </div>
                <div className="LadoACorpoDireita">
                  <CartelasCompletando />
                </div>
              </div>
            </div>
            <div className="ladoB">
              <div className="LadoBTitulo">
                <NumerosSorteadosTitulo />
                <div className="LadoBCartela">
                  <NumerosLancadosCartela />
                </div>
              </div>
            </div>
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
