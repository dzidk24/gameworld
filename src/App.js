import React from "react";

//components and pages
import Home from "./pages/home";
import Nav from "./components/nav";
//Styles
import GlobalStyles from "./components/globalStyles";
//Routes
import {Route} from "react-router-dom";



function App() {
  
  //path={["/game/:id", "/"]} -> render <Home /> for both paths.
  return (
    <div className="App">
         <GlobalStyles />
         <Nav />
         <Route path={["/game/:id", "/"]}>
            <Home />
         </Route>
    </div>
  );
}

export default App;
