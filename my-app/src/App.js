import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Home from "./webpages/Home";
import Footer from "./Navigation/Footer";
import Programs from "./webpages/Programs";
import Admission1 from "./webpages/Admission1";
import Admission2 from "./webpages/Admission2";
import Admission3 from "./webpages/Admission3";
import ContactUs from "./webpages/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Programs" element={<Programs />} />
            <Route path="/Admission1" element={<Admission1 />} />
            <Route path="/Admission2" element={<Admission2 />} />
            <Route path="/Admission3" element={<Admission3 />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
