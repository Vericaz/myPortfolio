import { Container, Grid } from "@material-ui/core";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollBtn from "./components/ScrollBtn/ScrollBtn";
// import ColorChanger from "./components/ColorChanger/ColorChanger";

function App() {
  return (
    <>
      <Container className={"top_60"}>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Sidebar />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <div className="main-content container_shadow">
                <Switch>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/">
                    <Resume />
                  </Route>
                </Switch>
              </div>
            </Router>

            <Footer />
          </Grid>
        </Grid>

        <ScrollBtn />
      </Container>
    </>
  );
}

export default App;