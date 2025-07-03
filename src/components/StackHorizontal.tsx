import { useRef, useEffect } from "react";
import "./StackHorizontal.css";

interface StackHorizontalProps {
  items: string[];
}

export default function StackHorizontal({ items }: StackHorizontalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        // Ajusta la velocidad multiplicando por un factor (ej: 1.5)
        containerRef.current.scrollLeft = window.scrollY * 1.2;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="stack-horizontal sticky" ref={containerRef}>
      {items.map((item, idx) => (
        <div className="stack-horizontal-item" key={idx}>
          {item}
        </div>
      ))}
    </div>
  );
}
