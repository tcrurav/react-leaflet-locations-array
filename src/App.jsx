import { BrowserRouter, Route, Routes } from "react-router-dom";
import Locations from "./pages/locations/Locations";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/locations" element={<Locations />} />
          <Route path="*" element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
