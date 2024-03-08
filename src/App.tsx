import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Router>
        <AppRoutes />
      </Router>
    </AnimatePresence>
  );
}

export default App;
