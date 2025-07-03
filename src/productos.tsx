import CardMenu from "./components/CardMenu";
import bg2 from "./assets/img/copa.png";

import "./productos.css";
export default function Productos() {
  return (
    <div className="menu-bg">
      <div className="main">
        <h1 className="title" style={{ margin: "20px" }}>
          Menú
        </h1>
        <CardMenu
          title="Mi titulo"
          text="Esto es un texto de ejemlo"
          extra="blabla"
          imageSrc={bg2}
          reverse={false}
        />
        <CardMenu
          title="Mi titulo"
          text="Esto es un texto de ejemlo"
          extra="blabla"
          imageSrc={bg2}
          reverse={true}
        />
        <CardMenu
          title="Mi titulo"
          text="Esto es un texto de ejemlo"
          extra="blabla"
          imageSrc={bg2}
          reverse={false}
        />
        <CardMenu
          title="Mi titulo"
          text="Esto es un texto de ejemlo"
          extra="blabla"
          imageSrc={bg2}
          reverse={true}
        />
        <CardMenu
          title="Mi titulo"
          text="Esto es un texto de ejemlo"
          extra="blabla"
          imageSrc={bg2}
          reverse={false}
        />
        <CardMenu
          title="Mi titulo"
          text="Esto es un texto de ejemlo"
          extra="blabla"
          imageSrc={bg2}
          reverse={true}
        />
        <CardMenu
          title="Mi titulo"
          text="Esto es un texto de ejemlo"
          extra="blabla"
          imageSrc={bg2}
          reverse={false}
        />
        <CardMenu
          title="Mi titulo"
          text="Esto es un texto de ejemlo"
          extra="blabla"
          imageSrc={bg2}
          reverse={true}
        />
      </div>
    </div>
  );
}
