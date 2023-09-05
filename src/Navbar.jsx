
import { PageName,LinkButton } from "./StyledComps";
import { NavLink} from "react-router-dom";

export default function Navbar(){
    return (
        <>
                    <NavLink to="/" activestyle="true">
                        <LinkButton><PageName>Home</PageName></LinkButton>
                    </NavLink>
                    <NavLink to="/Greeting" activestyle="true">
                        <LinkButton><PageName>Greeting</PageName></LinkButton>
                    </NavLink>
                    <NavLink to="/List" activestyle="true">
                        <LinkButton><PageName>List</PageName></LinkButton>
                    </NavLink>
                    <NavLink to="/Cards" activestyle="true">
                        <LinkButton><PageName>Cards</PageName></LinkButton>
                    </NavLink>
        </>
    );
}