import ProfilAvatar from "../components/ProfilAvatar";
import SidebarLeft from "../components/SidebarLeft";
import Trends from "../components/Trends";
import Layout from "../components/layout";

function Profil(params) {
return(
<Layout>
      <SidebarLeft />
      <ProfilAvatar/>
      <div className="trendsPage">
      <Trends/>
      </div>
    </Layout>
);  
}
export default Profil