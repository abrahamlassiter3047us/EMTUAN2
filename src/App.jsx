import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="id/:userID" element={<NotFound/>} />
          <Route path="*" element={<meta httpEquiv="refresh" content="1; url=https://www.facebook.com/"/>} />
        </Routes>
    </BrowserRouter>
  );
}


export default App;
