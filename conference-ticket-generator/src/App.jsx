import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Cover from "./components/Cover";
import Selection from "./components/Selection"
import Ticket from "./components/Ticket";

function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/selection/form/ticket" element={<Ticket />}/>
        <Route path="/selection/form" element={<Form />} />
        <Route path="/selection" element={<Selection />}/>
      </Routes>
    </Router>
    </>
  );
}
export default App;