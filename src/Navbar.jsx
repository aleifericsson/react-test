
import { PageName,LinkButton } from "./StyledComps";
import { NavLink} from "react-router-dom";

export default function Navbar(){
    return (
        <>
                    <NavLink to="/Greeting" activeStyle>
                        <LinkButton><PageName>Greeting</PageName></LinkButton>
                    </NavLink>
                    <NavLink to="/List" activeStyle>
                        <LinkButton><PageName>List</PageName></LinkButton>
                    </NavLink>
        </>
    );
}