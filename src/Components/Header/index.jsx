import "./index.scss";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goToStart = () => {
    navigate("/");
  };

  return (
    <div className="main-header">
      <div className="main-header_logo" onClick={goToStart}>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        <label>Gallery of films</label>
      </div>
    </div>
  );
}

export default Header;
