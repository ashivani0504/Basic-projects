import { Outlet } from "react-router-dom";
import "../styles/pageContent.css";
function PageContent() {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
}

export default PageContent;
