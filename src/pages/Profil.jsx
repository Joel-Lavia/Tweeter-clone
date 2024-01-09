import { Outlet } from "react-router-dom";
import SidebarLeft from "../components/SidebarLeft";

function Profil(params) {
return(
<div>
<SidebarLeft/>
<Outlet/>
</div>
);  
}
export default Profil