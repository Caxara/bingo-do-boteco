import "./style.css";

type TituloDeQuadranteProps = {
  titulo: string;
};

export function TituloDeQuadrante(props: TituloDeQuadranteProps) {
  return <h1 className="TituloDeQuadrante">{props.titulo}</h1>;
}
