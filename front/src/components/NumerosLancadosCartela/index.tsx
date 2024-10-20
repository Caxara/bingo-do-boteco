const listade100numeros = Array.from({ length: 100 }, (_, i) => i + 1);

export function NumerosLancadosCartela(): JSX.Element {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
        backgroundColor: "var(--light-petroleumblue)",
        boxShadow: "-2px -2px 3px var(--dark-grysdepayne)",
      }}
    >
      {listade100numeros.map((numero) => (
        <div
          key={numero}
          style={{
            border: "1px solid lightblue",
            backgroundColor: "var(--light-blue)",
            boxShadow: "2px 2px 5px var(--dark-black)",
            borderRadius: "5px",
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
