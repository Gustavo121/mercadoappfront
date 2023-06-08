import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import RecPassword from "./components/pages/RecPassword";
import Register from "./components/pages/Register";
import Index from "./components/pages/Index";
import PriceComparator from "./components/pages/PriceComparator";
import PurchaseList from "./components/pages/PurchaseList";
import Total from "./components/pages/Total";
import Finish from "./components/pages/Finish";
import Local from "./components/pages/Local";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/recpassword">Recover Password</Link>
        <Link to="/register">Register</Link>
        <Link to="/pricecomparator">Price Comparator</Link>
        <Link to="/purchaselist">Pucharse List</Link>
        <Link to="/total">Total</Link>
        <Link to="/finish">Finish</Link>
        <Link to="/local">Local</Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recpassword" element={<RecPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/index" element={<Index />} />
        <Route path="/pricecomparator" element={<PriceComparator />} />
        <Route path="/purchaselist" element={<PurchaseList />} />
        <Route path="/total" element={<Total />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/local" element={<Local />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
