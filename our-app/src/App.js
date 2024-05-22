import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Shop,
  Cart,
  Header,
  Footer,
  Contact,
  NotFoundPage,
} from "./pages/index";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
