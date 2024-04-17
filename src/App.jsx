import { BrowserRouter, Route, Routes } from "react-router-dom";
import Locations from "./pages/locations/Locations";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
