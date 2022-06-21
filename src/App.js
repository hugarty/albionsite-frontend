import React from "react";
import Chart from "./components/chart/Chart";
import SearchBar from "./components/search/SearchBar";
import Container from "@mui/material/Container";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Container maxWidth="xl">
      <SearchBar />
      <Chart title={"Hugarty"} />
      <Chart title={"Pedro"} />
      <Chart title={"Araujo"} />
      <Footer />
    </Container>
  );
};

export default App;
