import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles";

import AppRoutes from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
