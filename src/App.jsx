import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import SidebarLeft from "./components/SidebarLeft.jsx";
import Trends from "./components/Trends.jsx";

import("./style/reset.css");
import("./style/App.css");

export default function App() {
  return (
    <Layout>
      <SidebarLeft />
      <Home />
      <div className="trendsPage">
      <Trends/>
      </div>
    </Layout>
  );
}
