import React from "react";
import Header from "./components/header/Header";
import Banner from "./components/baneer/Banner";
import Features from "./components/features/Features";
function App() {
  return (
    <div className="w-full min-h-screen bg-bodyColor text-lightText">
      <Header />
      <Banner />
      <Features />
    </div>
  );
}

export default App;
