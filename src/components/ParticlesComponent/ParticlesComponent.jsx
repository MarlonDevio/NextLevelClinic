import "./ParticlesComponent.css";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";

import { particleOptions } from "../../utils/particleOptions.js";

function ParticlesComponent() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      style={{ zIndex: "-1000" }}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  );
}

export default ParticlesComponent;
