// import "./Body.css";
// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadSlim } from "tsparticles-slim";
//
// import { frontViewFit } from "../../assets/index.js";
// import { MealSection } from "../index.js";
//
// function Body() {
//   //   Particles initialization
//
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);
//     await loadSlim(engine);
//   }, []);
//   const particlesLoaded = useCallback(async (container) => {
//     await console.log(container);
//   }, []);
//
//   return (
//     <>
//       {/*<Particles*/}
//       {/*  id="tsparticles"*/}
//       {/*  init={particlesInit}*/}
//       {/*  loaded={particlesLoaded}*/}
//       {/*  options={options}*/}
//       {/*/>*/}
//       <main className="main_section">
//         <img className="main_figure" src={frontViewFit} alt="" />
//         {/*<MealSection />*/}
//       </main>
//     </>
//   );
// }
//
// export default Body;
