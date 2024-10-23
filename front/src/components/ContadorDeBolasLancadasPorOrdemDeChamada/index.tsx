const listade100numeros = Array.from({ length: 100 }, (_, i) => i + 1);

export function ContadorDeBolasLancadasPorOrdemDeChamada(): JSX.Element {
  return (
    <div
      className="BolasDoRodapé"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(25, 25px)", //Cria Dez Colunas
        gridTemplateRows: "repeat(4, 25px)", //Cria Dez Linhas
        gap: "20px",
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
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
