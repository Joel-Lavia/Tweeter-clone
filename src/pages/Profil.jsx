import ProfilAvatar from "../components/ProfilAvatar";
import SidebarLeft from "../components/SidebarLeft";
import Trends from "../components/Trends";
import Layout from "../components/layout";

function Profil() {
return(
<Layout>
      <SidebarLeft />
      <ProfilAvatar/>
      <Trends/>
    </Layout>
);  
}
export default Profil