import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content_on_home_page from "./components/Content_on_home_page";
import Login from "./components/Login";
import CommingSoon from "./components/commingsoon";
import BulkOption from "./components/BulkOption";
import Profile from "./components/Profile";
import Articles from "./components/Articles";
import RequestComp from "./components/RequestComp";
import Content_on_selling_page from "./components/Content_on_selling_page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content_on_home_page />} />
        <Route path="/Auth" element={<Login />} />
        <Route path="/Retail" element={<CommingSoon />} />
        <Route path="/Bulk" element={<BulkOption />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Bulkbuy" element={<RequestComp />} />
        <Route path="/Bulksell" element={<Content_on_selling_page />} />
      </Routes>
    </Router>
  );
}

export default App;
