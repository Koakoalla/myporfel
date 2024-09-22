import { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import About, { AboutHeader } from "@/modules/about";
import CustomMouse from "@/modules/customMouse";
import Hero from "@/modules/hero";
import ProjectsList, { ProjectsHeader } from "@/modules/projects";
import Loader from "@/modules/loader";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {

    return <Loader />;
  }


  return (
    <>
      <CustomMouse />

      <Parallax pages={12} id="__parallax">
        <ParallaxLayer>
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <AboutHeader />
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <About />
        </ParallaxLayer>

        <ParallaxLayer offset={3}>
          <ProjectsList />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}