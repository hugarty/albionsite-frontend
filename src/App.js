import React from "react";
import SearchBar from "./components/search/SearchBar";
import Container from "@mui/material/Container";
import Footer from "./components/footer/Footer";
import CustomizedSnackbars from "./components/snackbar/CustomizedSnackbars";
import { buildFetchData } from "./http/Fetch";
import ChartsWrapper from "./components/chart/ChartsWrapper";
import useWindowDimensions from "./components/use/useWindowDimensions";

const HOME_URL = process.env.REACT_APP_HOME_URL;
const SEARCH_OPTIONS_URL = process.env.REACT_APP_SEARCH_OPTIONS_URL;

const App = () => {
  const [chartsData, setChartsData] = React.useState([]);
  const [searchBarOptions, setSearchBarOptions] = React.useState([]);
  const [httpErrorMessage, setHttpErrorMessage] = React.useState(false);
  const { width } = useWindowDimensions();
  
  const fetchData = React.useMemo(() => buildFetchData(setHttpErrorMessage), []) ;

  React.useEffect(() => {
    fetchData(HOME_URL, setChartsData);
    fetchData(SEARCH_OPTIONS_URL, setSearchBarOptions);
  }, [fetchData]);

  const handleCloseSnackbar = (_e, reason) => {
    if (reason !== "clickaway") 
      setHttpErrorMessage(false);
  };

  return (
    <Container maxWidth="xl">
      <CustomizedSnackbars
        error={httpErrorMessage}
        handleClose={handleCloseSnackbar}
      />
      <SearchBar
        options={searchBarOptions}
        fetchData={fetchData}
        setChartsData={setChartsData}
      />
      <ChartsWrapper chartsData={chartsData} width={width}/>
      <Footer />
    </Container>
  );
};

export default App;
