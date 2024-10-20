const listade100numeros = Array.from({ length: 100 }, (_, i) => i + 1);

export function ContadorDeBolasLancadasPorOrdemDeChamada(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
        boxShadow: "-2px -2px 5px var(--dark-grysdepayne)",
      }}
    >
      {listade100numeros.map((numero) => (
        <div
          key={numero}
          style={{
            border: "1px solid lightblue",
            backgroundColor: "var(--light-petroleumblue)",
            boxShadow: "2px 2px 5px var(--dark-black)",
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
