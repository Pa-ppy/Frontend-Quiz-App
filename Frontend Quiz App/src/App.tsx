import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import QuestionsPage from "./pages/QuestionsPage";
import CompletedPage from "./pages/completed/CompletedPage";

const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="/questions/:quizId" element={<QuestionsPage />} />
          <Route path="/completion" element={<CompletedPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
