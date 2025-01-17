import React from "react";
import { Footer, Header } from "./components/layouts";
import HomePage from "./pages/home";

const App:React.FC = () => {
  return (
    <>
      <Header />
      <HomePage/>
      <Footer />
    </>
  );
};

export default App;
