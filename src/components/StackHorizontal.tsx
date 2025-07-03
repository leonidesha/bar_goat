import { useRef, useEffect } from "react";
import "./StackHorizontal.css";

interface StackHorizontalProps {
  items: string[];
  activeIndex: number;
  onSelect: (idx: number) => void;
}

export default function StackHorizontal({
  items,
  activeIndex,
  onSelect,
}: StackHorizontalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll horizontal automático al grupo activo
  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el && containerRef.current) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <div className="stack-horizontal sticky" ref={containerRef}>
      {items.map((item, idx) => (
        <div
          className={`stack-horizontal-item${
            activeIndex === idx ? " active" : ""
          }`}
          key={idx}
          ref={(el) => (itemRefs.current[idx] = el)}
          onClick={() => onSelect(idx)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
