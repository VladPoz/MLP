import React from "react";
import Index from "./app/index";
import Lection from "./app/lection";
import Practice from "./app/practice";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path="/lection" element={<Lection />}/>
        <Route path="/practice" element={<Practice />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
