import "./CardMenu.css";
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
        flexDirection: reverse ? "row-reverse" : "row", // Alterna dirección
      }}
    >
      <div className="card-menu-image">
        <img
          className="card-menu-img"
          style={{
            borderRadius: reverse ? "0 1rem 1rem 0" : "1rem 0 0 1rem",
          }}
          src={imageSrc}
          alt={title}
        />
      </div>
      <div
        className="card-menu-content"
        style={{
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
