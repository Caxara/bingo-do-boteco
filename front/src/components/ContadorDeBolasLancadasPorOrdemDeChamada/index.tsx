const listade100numeros = Array.from({ length: 100 }, (_, i) => i + 1);

export function ContadorDeBolasLancadasPorOrdemDeChamada(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
      }}
    >
      {listade100numeros.map((numero) => (
        <div
          key={numero}
          style={{
            border: "1px solid lightblue",
            backgroundColor: "rgba(0, 0, 100, 0.5)",
            borderRadius: "50%",
            width: "30px",
            display: "flex",
            justifyContent: "center",
          }}
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
