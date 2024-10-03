import React from "react";
import Header from "./components/header/Header";
import Banner from "./components/baneer/Banner";
import Features from "./components/features/Features";
import Projects from "./components/project/Projects";
import Resume from "./components/resume/Resume";
function App() {
  return (
    <div className="w-full min-h-screen bg-bodyColor text-lightText">
      <Header />
      <Banner />
      <Features />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
