const listade100numeros = Array.from({ length: 100 }, (_, i) => i + 1);

export function NumerosLancadosCartela(): JSX.Element {
  return (
    <div
      className="NumerosLancadosCartelaGrid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 25px)",
        gridTemplateRows: "repeat(10, 25px)",
        gap: "15px",
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
            height: "30px",
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
