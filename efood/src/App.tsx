import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles";

import AppRoutes from "./routes";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <AppRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
