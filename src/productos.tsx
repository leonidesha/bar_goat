import { useRef, useState, useEffect } from "react";
import StackHorizontal from "./components/StackHorizontal";
import CardMenu from "./components/CardMenu";
import bg2 from "./assets/img/copa.png";
import "./productos.css";

const grupos = [
  {
    tipo: "Entradas",
    cards: [
      {
        id: "card1",
        title: "Entrada 1",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: false,
      },
      {
        id: "card2",
        title: "Entrada 2",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: true,
      },
      {
        id: "card2",
        title: "Entrada 2",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: false,
      },
      {
        id: "card2",
        title: "Entrada 2",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: true,
      },
      {
        id: "card2",
        title: "Entrada 2",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: false,
      },
    ],
  },
  {
    tipo: "Platos principales",
    cards: [
      {
        id: "card3",
        title: "Plato 1",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: true,
      },
      {
        id: "card4",
        title: "Plato 2",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: false,
      },
      {
        id: "card4",
        title: "Plato 2",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: true,
      },
      {
        id: "card4",
        title: "Plato 2",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: false,
      },
      {
        id: "card4",
        title: "Plato 2",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: true,
      },
    ],
  },
  {
    tipo: "Platos secundarios",
    cards: [
      {
        id: "card3",
        title: "Plato 1",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: false,
      },
      {
        id: "card4",
        title: "Plato 2",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: true,
      },
      {
        id: "card4",
        title: "Plato 2",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: false,
      },
      {
        id: "card4",
        title: "Plato 2",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: true,
      },
      {
        id: "card4",
        title: "Plato 2",
        text: "Ejemplo",
        extra: "blabla",
        imageSrc: bg2,
        reverse: false,
      },
    ],
  },
  // ...otros grupos
];

export default function Productos() {
  const [activeGroup, setActiveGroup] = useState(0);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scrollspy: detecta el grupo visible al hacer scroll
  useEffect(() => {
    const onScroll = () => {
      let found = 0;
      for (let i = 0; i < grupos.length; i++) {
        const ref = groupRefs.current[i];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < 120) found = i;
        }
      }
      setActiveGroup(found);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Al hacer click en la barra, scroll al grupo
  const handleSelect = (idx: number) => {
    const ref = groupRefs.current[idx];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="menu-bg">
      <StackHorizontal
        items={grupos.map((g) => g.tipo)}
        activeIndex={activeGroup}
        onSelect={handleSelect}
      />
      <div className="main">
        {grupos.map((grupo, idx) => (
          <div key={grupo.tipo} ref={(el) => (groupRefs.current[idx] = el)}>
            <h2 style={{ color: "orange", margin: "2rem 0 1rem" }}>
              {grupo.tipo}
            </h2>
            {grupo.cards.map((card) => (
              <CardMenu key={card.id} {...card} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
