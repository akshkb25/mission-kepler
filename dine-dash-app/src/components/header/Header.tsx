import { useEffect, useState } from "react";
import { menu } from "../../assets/json/menu.tsx";
import styles from "./Header.module.scss";
import { useNavigate,useLocation  } from "react-router-dom";

const Header: React.FC = () => {
  const [expandHeader, setexpandHeader] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/restaurants" || location.pathname === "/reserve") {
      setexpandHeader(true);
    } else {
      setexpandHeader(false);
    }
  }, [location.pathname]);


  const headerItemClick = (route: string) => {
    if (location.pathname === "/restaurants" || location.pathname === "/reserve") {
      setexpandHeader(true);
    } else {
      setexpandHeader(false);
    }
    navigate(route);
  };

  return (
    <div
      className={`${styles.headerContainer} ${
        expandHeader ? styles.expandHeader : ""
      }`}
    >
      <div className={styles.logoContainer} onClick={() => navigate("/")}>
        DINEDASH
      </div>
      <ul className={styles.listWrapper}>
        {menu?.map((item) => (
          <li
            key={item.id}
            className={`${styles.listItem} ${
              location.pathname === item.route ? styles.activeMenu : ""
            }`}
            onClick={() => headerItemClick(item.route)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
