import "bootstrap/dist/css/bootstrap.min.css";
import Events from "./pages/HomaPage/Events/Events";
import Navbar from "./pages/HomaPage/Header/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Card_data from "./pages/HomaPage/Events/Card_data";
import Footer from "./pages/HomaPage/Footer/Footer";

function App() {
  return (
    // <div className="App">
    <div>
      <Navbar></Navbar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Events></Events>} />
          <Route path="/Card_data/:id" element={<Card_data></Card_data>} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
