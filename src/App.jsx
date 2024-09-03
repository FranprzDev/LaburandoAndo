import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppRouter from "./router/AppRouter";
import "./hooks/styles/useAlert.min.css";
import "./App.min.css";
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./common/components/ScrollTop";
function App() {
  return (
    <>
      <BrowserRouter>
          <ScrollTop/>
          <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
