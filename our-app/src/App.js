import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
