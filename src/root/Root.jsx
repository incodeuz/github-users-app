import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import { ThemeContext } from "../context/darkLight";
import { Container } from "./style";

const Root = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <Container dark={dark}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
};

export default Root;
