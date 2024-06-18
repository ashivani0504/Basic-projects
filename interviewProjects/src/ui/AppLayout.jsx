import Header from "./Header";
import Sidebar from "./Sidebar";
import PageContent from "./PageContent";
import "../styles/appLayout.css";

function AppLayout() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <main className="main">
        <div className="content">
          <PageContent />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
