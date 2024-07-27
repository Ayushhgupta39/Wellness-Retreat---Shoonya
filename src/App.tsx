import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import RetreatPage from "./pages/RetreatPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="font-open_sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/retreat/:id" element={<RetreatPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
