export function MostradorDePremios() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
        height: "100%",
      }}
    >
      <h1
        style={{
          flexGrow: 1,
          fontSize: "25px",
          textAlign: "center",
          color: "white",
          background: "var(--light-purple)",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        RODADA Nº
      </h1>
      <div
        style={{
          flexGrow: 1,
        }}
      ></div>
      <div
        style={{
          flexGrow: 1,
        }}
      >
        Deu certo?
      </div>
      <div
        style={{
          flexGrow: 1,
        }}
      >
        Deu certo?
      </div>
      <div
        style={{
          flexGrow: 1,
        }}
      >
        Deu certo?
      </div>
      <div
        style={{
          flexGrow: 1,
        }}
      >
        Deu certo?
      </div>
    </div>
  )
}
