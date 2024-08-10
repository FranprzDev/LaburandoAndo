import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppRouter from "./router/AppRouter";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
