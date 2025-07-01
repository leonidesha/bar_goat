import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

interface ParticlesBackgroundProps {
  particleOptions?: ISourceOptions; // Permite personalización desde el padre
  className?: string; // Para estilos adicionales
}

const ParticlesBackground = ({
  particleOptions,
  className = "",
}: ParticlesBackgroundProps) => {
  const [init, setInit] = useState(false);

  // Inicializa el motor de partículas
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Configuración por defecto (burbujas estilo champagne)
  const defaultOptions: ISourceOptions = {
    particles: {
      color: { value: "#FFFFFF" },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
      },
      opacity: { value: { min: 0.3, max: 0.7 } },
      size: { value: { min: 1, max: 3 } },
    },
    background: { color: "#000000" },
    ...particleOptions, // Sobrescribe con props personalizadas
  };

  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      {init && <Particles id="tsparticles" options={defaultOptions} />}
    </div>
  );
};

export default ParticlesBackground;
