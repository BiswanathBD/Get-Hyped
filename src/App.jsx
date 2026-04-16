import "./App.css";
import Hero from "./Components/Hero";
import LearnMore from "./Components/LearnMore";
import Expertise from "./Components/Expertise";
import Navbar from "./Components/Navbar";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }} />
      <Navbar />
      <Hero />
      <LearnMore />
      <Expertise />
    </>
  );
}

export default App;
