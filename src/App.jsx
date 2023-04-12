import "./App.scss";
import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
}

export default App;
