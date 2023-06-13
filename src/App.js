import { Route, Routes, BrowserRouter} from "react-router-dom";

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

import Container from "./components/layout/Container";

function App() {
  return (
    <BrowserRouter>      
      <Container customClass="min-height">
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
      </Container>
      <p>Footer</p>
    </BrowserRouter>
  );
}

export default App;
