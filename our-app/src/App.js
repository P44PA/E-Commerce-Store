import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Shop,
  Cart,
  Header,
  Footer,
  Contact,
  NotFoundPage,
  About,
} from "./pages/index";
import Favorites from "./pages/Favorites";
import { FavoritesProvider } from "./pages/FavoritesContext";

function App() {
  return (
    <div>
      <Router>
        <FavoritesProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />{" "}
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </FavoritesProvider>
      </Router>
    </div>
  );
}

export default App;
