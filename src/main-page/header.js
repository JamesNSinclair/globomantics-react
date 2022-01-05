import { Component } from "react";
import logo from "./GloboLogo.png"
import { useNavigate as useHistory } from "react-router-dom";


const Header = ({ subtitle }) => {
  const history = useHistory();

  const setActive = () => {
    history(`/`);
  };


return (
  <header className="row">
    <div className="col-md-5">
      <img src={logo} className="logo" alt="logo" onClick={setActive}/>
    </div>
    <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
  </header>
);
};

export default Header;
