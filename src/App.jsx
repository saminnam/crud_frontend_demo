import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceForm from "./ServiceForm";
import ServiceList from "./ServiceList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ServiceForm />} />
        <Route path="/services" element={<ServiceList />} />
      </Routes>
    </Router>
  );
}

export default App;
