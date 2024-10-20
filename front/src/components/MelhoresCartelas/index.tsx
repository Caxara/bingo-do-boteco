import { TituloDeQuadrante } from "../TituloDeQuadrante";
import "./style.css";
export function MelhoresCartelas() {
  return (
    <div className="MelhoresCartelasGeral">
      <div className="MelhoresCartelasTopo">
        <TituloDeQuadrante titulo="MELHORES CARTELAS" />
      </div>
      <div className="MelhoresCartelasCorpoNumeros">
        <div className="NumerosMelhoresCartelas CoresMelhoresCartelas">
          <p>Jogador 1</p>
          <div className="BolaFaltante">42</div>
          <div className="SituacaoDoJogador">OE</div>
        </div>
        <div className="NumerosMelhoresCartelas">
          <p>Jogador 2</p>
          <div className="BolaFaltante">67</div>
          <div className="SituacaoDoJogador">IN</div>
        </div>
        <div className="NumerosMelhoresCartelas CoresMelhoresCartelas">
          <p>Jogador 3</p>
          <div className="BolaFaltante">2</div>
          <div className="SituacaoDoJogador">IN</div>
        </div>
        <div className="NumerosMelhoresCartelas">
          <p>Jogador 4</p>
          <div className="BolaFaltante">52</div>
          <div className="SituacaoDoJogador">OE</div>
        </div>
        <div className="NumerosMelhoresCartelas CoresMelhoresCartelas">
          <p>Jogador 5</p>
          <div className="BolaFaltante">33</div>
          <div className="SituacaoDoJogador">OF</div>
        </div>
        <div className="NumerosMelhoresCartelas">
          <p>Jogador 6</p>
          <div className="BolaFaltante">20</div>
          <div className="SituacaoDoJogador">IN</div>
        </div>
        <div className="NumerosMelhoresCartelas CoresMelhoresCartelas">
          <p>Jogador 7</p>
          <div className="BolaFaltante">44</div>
          <div className="SituacaoDoJogador">OE</div>
        </div>
        <div className="NumerosMelhoresCartelas">
          <p>Jogador 8</p>
          <div className="BolaFaltante">9</div>
          <div className="SituacaoDoJogador">OE</div>
        </div>
        <div className="NumerosMelhoresCartelas CoresMelhoresCartelas">
          <p>Jogador 9</p>
          <div className="BolaFaltante">18</div>
          <div className="SituacaoDoJogador">IN</div>
        </div>
        <div className="NumerosMelhoresCartelas">
          <p>Jogador 10</p>
          <div className="BolaFaltante">87</div>
          <div className="SituacaoDoJogador">OE</div>
        </div>
      </div>
    </div>
  );
}
