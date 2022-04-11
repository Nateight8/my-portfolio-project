import React from "react";
import Home from "./Home";

import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import ContactMe from "./ContactMe";
import { useLayoutEffect } from "react";
import Projects from "./Projects";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </Wrapper>
    </BrowserRouter>
  );
}
export default App;
