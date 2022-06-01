import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import Explore from "./pages/Explore"
import Notification from "./pages/Notification"
import Message from "./pages/Message"
import Error from "./pages/Error"
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Wrapper className="b">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="notification" element={<Notification />} />
          <Route path="message" element={<Message />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Aside />
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

export default App;
