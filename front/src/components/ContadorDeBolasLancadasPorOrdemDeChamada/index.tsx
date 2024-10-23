import "./style.css";
const listade100numeros = Array.from({ length: 100 }, (_, i) => i + 1);

export function ContadorDeBolasLancadasPorOrdemDeChamada(): JSX.Element {
  return (
    <div className="BolasDoRodape">
      {listade100numeros.map((numero) => (
        <div
          key={numero}
          onClick={() => {
            alert(`button ${numero} clicked`);
          }}
        >
          <p style={{ opacity: 0 }}>{numero}</p>
        </div>
      ))}
    </div>
  );
}
