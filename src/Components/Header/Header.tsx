import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigateTab = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <header className="header">
      <div className="header-tabs">
        <div
          className={`header-tabs__tab ${
            pathname === "/all" && "header-tabs__tab_active"
          }`}
          onClick={(e) => navigateTab("all")}>
          Все котики
        </div>
        <div
          className={`header-tabs__tab ${
            pathname === "/favourite" && "header-tabs__tab_active"
          } `}
          onClick={() => navigateTab("favourite")}>
          Любимые котики
        </div>
      </div>
    </header>
  );
};
