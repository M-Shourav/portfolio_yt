import React from "react";
import Header from "./components/header/Header";
import Banner from "./components/baneer/Banner";
import Features from "./components/features/Features";
import Projects from "./components/project/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="w-full min-h-screen bg-bodyColor text-lightText">
      <Header />
      <Banner />
      <Features />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
