import CardMenu from "./components/CardMenu";
import StackHorizontal from "./components/StackHorizontal";
import bg2 from "./assets/img/copa.png";

import "./productos.css";
export default function Productos() {
  return (
    <div className="menu-bg">
      <div className="main">
        <h1 className="title" style={{ margin: "20px" }}>
          Menú
        </h1>
        <StackHorizontal
          items={[
            "Entradas",
            "Platos principales",
            "Bebidas",
            "Postres",
            "Promos",
            "Entradas",
            "Platos principales",
            "Bebidas",
            "Postres",
            "Promos",
            "Entradas",
            "Platos principales",
            "Bebidas",
            "Postres",
            "Promos",
            "Entradas",
          ]}
        />
        <CardMenu
          id="card1"
          title="Mi titulo"
          text="Esto es un texto de ejemplo"
          extra="blabla"
          imageSrc={bg2}
          reverse={false}
        />
        <CardMenu
          id="card2"
          title="Mi titulo"
          text="Esto es un texto de ejemplo"
          extra="blabla"
          imageSrc={bg2}
          reverse={true}
        />
        <CardMenu
          id="card3"
          title="Mi titulo"
          text="Esto es un texto de ejemplo"
          extra="blabla"
          imageSrc={bg2}
          reverse={false}
        />
        <CardMenu
          id="card4"
          title="Mi titulo"
          text="Esto es un texto de ejemplo"
          extra="blabla"
          imageSrc={bg2}
          reverse={true}
        />
        <CardMenu
          id="card5"
          title="Mi titulo"
          text="Esto es un texto de ejemplo"
          extra="blabla"
          imageSrc={bg2}
          reverse={false}
        />
        <CardMenu
          id="card6"
          title="Mi titulo"
          text="Esto es un texto de ejemplo"
          extra="blabla"
          imageSrc={bg2}
          reverse={true}
        />
        <CardMenu
          id="card7"
          title="Mi titulo"
          text="Esto es un texto de ejemplo"
          extra="blabla"
          imageSrc={bg2}
          reverse={false}
        />
        <CardMenu
          id="card8"
          title="Mi titulo"
          text="Esto es un texto de ejemplo"
          extra="blabla"
          imageSrc={bg2}
          reverse={true}
        />
      </div>
    </div>
  );
}
