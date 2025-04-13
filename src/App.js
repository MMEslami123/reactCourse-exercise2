// import { BsInstagram, BsTelegram } from "react-icons/bs";
import { useRoutes } from "react-router-dom";
import Routes from "./routes";
import "./App.css";

function App() {
  const router = useRoutes(Routes);
  return router;
}

export default App;
