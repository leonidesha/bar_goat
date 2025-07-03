interface CardMenuProps {
  imageSrc?: string;
  title?: string;
  text?: string;
  extra?: string;
  reverse?: boolean;
  id?: string; // Añadido para permitir un ID opcional
}

function CardMenu(props: CardMenuProps) {
  const { id, imageSrc, title, text, extra, reverse } = props;
  return (
    <div
      id={id}
      className="card-menu-horizontal"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row", // Alterna dirección
        background: "transparent",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        marginBottom: "1.5rem",
        minHeight: "200px",
      }}
    >
      <div
        style={{
          flex: "0 0 200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "200px",
            objectFit: "contain",
            transform: "rotate(30deg)",
            borderRadius: reverse ? "0 1rem 1rem 0" : "1rem 0 0 1rem",
          }}
          src={imageSrc}
          alt={title}
        />
      </div>
      <div
        style={{
          flex: "1 1 0",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: reverse ? "right" : "left",
        }}
      >
        <h5 style={{ color: "orange", margin: 0 }}>{title}</h5>
        <p style={{ color: "orange", margin: "0.5rem 0" }}>{text}</p>
        <p style={{ color: "orange", margin: 0 }}>
          <small className="text-muted">{extra}</small>
        </p>
      </div>
    </div>
  );
}
export default CardMenu;
