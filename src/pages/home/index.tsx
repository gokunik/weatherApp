import React from "react";
import { Footer } from "./components/Footer";
import { NavMenu } from "./components/Navmenu";
import { Welcome } from "./components/Welcome";
import { Transition } from "@/components/Trasition";

export const Home: React.FC = () => {
  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden">
        <NavMenu />
        <Welcome />
        <Footer />
      </div>
      <Transition className="slide slide-out" />
    </>
  );
};
