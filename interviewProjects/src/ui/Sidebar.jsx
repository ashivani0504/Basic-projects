import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="aside">
      <nav className="side-nav">
        <li>
          <NavLink className="nav" to="/accordian">
            Accordian
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/randomColorGenerator">
            Random Color Generator
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/counter">
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/todo">
            ToDo List
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/fetch">
            Fetching data
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/formvalidation">
            Form validation
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/imageSlider">
            Image Slider
          </NavLink>
        </li>
      </nav>
    </aside>
  );
}

export default Sidebar;
